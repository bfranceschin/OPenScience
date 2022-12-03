// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract NFT is ERC721URIStorage, ReentrancyGuard, Ownable {
  using Counters for Counters.Counter;
  using SafeMath for uint256;

  Counters.Counter private _tokenIds;

/**
 * @dev total value ever donated to tokenId
 * maps _tokenId_ to _value_
 */
  mapping( uint256 => uint256 ) private _totalDonated;

/**
  * @dev total value ever claimed from _tokenId_'s donations
  * maps _tokenId_ to _value_
  */
  mapping(uint256 => uint256) private _totalClaimed;

/**
 * @dev total value ever claimed to _tokenTo_ from _tokenFrom_'s donations
 * maps _(beneficiary, claimee)_ to _value_
 * _beneficiary_ is the token claiming part of the donation
 * _claimee_ is the token that received the donation and is having its balance claimed
 */
  mapping(
    uint256 => mapping(uint256 => uint256 ) 
  ) private _balanceClaimed;
  
/**
 * @dev list of references created for _tokenId_
 * list cannot be updated if references must be changed new token should be minted
 * maps _tokenId_ to _reference list_
 */
  mapping(uint256 => uint256[]) private _references;

/**
 * maps _from_ to _to_
 * @dev donations to _from_ are automatically sent to _to_
 * this mapping allows new tokens to be minted with updated references
 * donations sent to old token are still received by the new one with the right split
 */
  mapping(uint256 => uint256 ) private _followMe;

  uint256 private _treasuryBalance;

  uint24 private _feeBase;

  uint8 private _feeMultiplier;

  uint24 private _taxBase;

  uint8 private _taxMultiplier;

  uint8 private _splitBase;

  uint8 private _splitMultiplier;

  event Donation (address indexed donor, uint256 indexed tokenId, uint256 value);

  event DonationClaimed (uint256 indexed to, uint256 indexed from, uint256 valueClaimed);

  event FollowMePut (uint256 indexed from, uint256 indexed to);
    

/**
 * fee set at .3%
 * tax set at .1%
 * split set at 2/3 
 */  
  constructor() ERC721(
      "OPen Science", "OPSP"
    ) {

    _feeBase = 1000;
    _feeMultiplier = 3;
    _taxBase = 1000;
    _taxMultiplier = 1;
    _splitBase = 3;
    _splitMultiplier = 2;

  }

/**
 * getters
 */
  function tokenTotalDonated(uint256 tokenId) public view returns (uint256){
    return _totalDonated[tokenId];
  }
  
  function tokenDonationBalance (uint256 tokenId) public view returns (uint256) {
    return _totalDonated[tokenId] - _totalClaimed[tokenId];
  }


  function numberOfTokens () public view returns (uint256) {
    return _tokenIds.current();
  }

    function getTreasuryBalance() public view returns (uint256) {
    return _treasuryBalance;
  }
 
  function getReferences (uint256 tokenId) public view returns(uint256[] memory) {
    require(tokenId >= 0 && tokenId < _tokenIds.current(), "_getReferences : enter a valid token Id");
    return _references[tokenId];
  }

  function getFee() public view returns(uint256, uint256) {
    return (_feeMultiplier, _feeBase);
  }
  
  function getTax() public view returns(uint256, uint256) {
    return (_taxMultiplier, _taxBase);
  }

  function getSplit() public view returns(uint256, uint256) {
    return (_splitMultiplier, _splitBase);
  }
/**
 * setters
 */
  
  function setClaimFee (uint24 base, uint8 multiplier) public onlyOwner {
    _feeBase = base;
    _feeMultiplier = multiplier;
  }

  function setTax (uint24 base, uint8 multiplier) public onlyOwner {
    _taxBase = base;
    _taxMultiplier = multiplier;
  }

  function setSplit (uint8 base, uint8 multiplier) public onlyOwner {
    require(base > multiplier);
    _splitBase = base;
    _splitMultiplier = multiplier;
  }


/**
 * tokens methods
 */

  function createToken (string memory tokenURI, uint256[] memory refs) public returns(uint256) {
    uint256 newTokenId = _tokenIds.current();
    _tokenIds.increment();
    _mint(msg.sender, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
    _createReferences(newTokenId, refs);
    return newTokenId;
  }

/**
 * @notice should be used when a onwer wants to update _
 * the reference list, in which case a new NFT should be minted _
 * followMe guarantees that any donation sent to the old NFT will be _
 * sent to the new one and split between the new list of references
 * @dev updates followMe mapping 
 * @param from the id of the old NFT
 * @param to the id of the new updated NFT 
 */
  function setFollowMe (uint256 from, uint256 to) public {
    require(msg.sender == _ownerOf(from), 'only owner of the token can set a follow me ');
    _followMe[from] = to;
  }

/**
 * @dev receives payment as donation updated _totalDonated[tokenId]
 * if there is a _followMe set for _tokenId_ uses this entry as tokenId
 * 
 */
  function donate (uint256 tokenId) public payable nonReentrant {
    
    require(tokenId < _tokenIds.current(), "Token does not exist.");
    uint256 _tax = (msg.value * _taxMultiplier ) / _taxBase; // treasury tax
    
    if (_followMe[tokenId] != 0) { // checks if a followMe is set
      tokenId = _followMe[tokenId];
    }

    _totalDonated[tokenId] = _totalDonated[tokenId].add(msg.value -_tax);
    emit Donation (msg.sender, tokenId, msg.value - _tax);
    _treasuryBalance += _tax;

  }

  function _createReferences (uint256 tokenId, uint256[] memory refs) private { 
    uint i;
    for (i=0 ; i < refs.length ; i++){
      require( refs[i] < _tokenIds.current() , "_createReferences: Invalid tokenId in Reference entries" );
    } 
    
    _references[tokenId] = refs;

  }

/**
 * @notice gets the value that can be claimed for a pair (to, from)
 * @dev owner of the token that received the donation has a claim to _splitMultiplier / _splitBase _
 * _references split the remainder: ( _splitBase - _splitMultiplier ) / _splitBase
 * @param from tokenId that received the donation
 * @param to tokenId that has a claim over part of the donation received by _from_
 * @return _ value that _to_ can receive for that particular token (_from_)
 */
  
  function claimable (uint256 to, uint256 from) public view returns (uint256) {
    if(_references[from].length > 0){

      if(to == from){
        return ( _totalDonated[to] * _splitMultiplier) / _splitBase  - _balanceClaimed[to][to];
      }

      return ( (_totalDonated[from] * (_splitBase - _splitMultiplier) ) / _splitBase ) / _references[from].length - _balanceClaimed[to][from];
    }

    if(to == from){
      return tokenDonationBalance(from);
    }
    return 0;
  }


/**
 * @dev sender pulls a fee _
 * and sends claimable value to address of the owner of _tokenId_: callable by any address
 * @param tokenId id of the token having its donation pulled
 * 
 */

  function claimToOwner (uint256 tokenId ) public nonReentrant {
    
    uint256 valueClaimed = claimable(tokenId, tokenId);
    require(
      valueClaimed > 0, "There are no funds to be claimed for the owner" 
    );
    
    uint256 claimer_cut = ( valueClaimed * _feeMultiplier) / _feeBase; // claim fee
    emit DonationClaimed(tokenId, tokenId, valueClaimed);
    _totalClaimed[tokenId] += valueClaimed;
    _balanceClaimed[tokenId][tokenId] += valueClaimed;

    address payable beneficiary = payable( ownerOf(tokenId) );

    (bool success, ) = beneficiary.call{value: valueClaimed - claimer_cut}("");
    require(success, "Transfer of owner's funds failed");
    
    (bool success_, ) = payable(msg.sender).call{value: claimer_cut}("");
    require(success_ , "Transfer of claimer's funds failed");
  }

/**
 * 
 * @dev sender pulls a fee _
 * and sends claimable part of the donation balance to a reference NFT: callable by any address
 * @param to id of the reference NFT receiving the donation balance
 * @param from id of the NFT having its donation balance claimed
 */
  function claimToRef (uint256 to, uint256 from) public nonReentrant {

    uint256 valueClaimed = claimable(to, from);
    require( 
      valueClaimed > 0, "There are no funds to be claimed to this reference"
    );

    uint256 claimer_cut = ( valueClaimed * _feeMultiplier ) / _feeBase;
    emit DonationClaimed(to, from, valueClaimed);
    _totalClaimed[from] += valueClaimed;
    _balanceClaimed[to][from] += valueClaimed;

    _totalDonated[to] += (valueClaimed - claimer_cut);

    (bool success_, ) = payable(msg.sender).call{value: claimer_cut}("");
    require(success_ , "Transfer of claimer's funds failed");

  }
  

  // withdraw treasure?

}