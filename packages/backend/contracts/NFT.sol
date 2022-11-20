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

  uint private _treasuryBalance;

  event Donation (address donor, uint256 tokenId, uint256 value);

  event DonationClaimed (uint256 from, uint256 to, uint256 valueClaimed);

  event FollowMePut (uint256 from, uint256 to);
    
  
  constructor() ERC721("SciGraph", "SCGP") {}

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

  function createToken (string memory tokenURI, uint256[] memory refs) public returns(uint256) {
    uint256 newTokenId = _tokenIds.current();
    _tokenIds.increment();
    _mint(msg.sender, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
    _createReferences(newTokenId, refs);
    return newTokenId;
  }

/**
 * @dev receives payment as donation updated _totalDonated[tokenId]
 * if there is a _followMe set for _tokenId_ uses this entry as tokenId
 * 
 */
  function donate (uint256 tokenId) public payable nonReentrant {
    
    require(tokenId < _tokenIds.current(), "Token does not exist.");
    uint256 _tax = msg.value / 100; // 1% treasury fee
    
    if (_followMe[tokenId] != 0) {
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
 * @notice gets the value that can be claimed for a pair (beneficiary, claimee)
 * @dev owner of the token that received the donation has a claim to 2/3
 * owners of references split the remaining 1/3   
 * @param beneficiary tokenId whose owner have a claim over part of the tokenDonationBalance
 * @param claimee tokenId that received the donation
 * @return _ value that _beneficiary_ can receive for that particular _claimee_
 */
  
  function claimable (uint256 beneficiary, uint256 claimee) public view returns (uint256) {
    if(_references[claimee].length > 0){

      if(beneficiary == claimee){
        return ( _totalDonated[claimee] * 2) / 3  - _balanceClaimed[claimee][claimee];
      }

      return ( _totalDonated[claimee] / 3) / _references[claimee].length - _balanceClaimed[beneficiary][claimee];
    }

    return tokenDonationBalance(claimee);
  }


/**
 * @dev sender pulls a fee 
 * and sends claimable value to address of the owner of _to_: callable by any address
 * @param to id of the token whose owner is the beneficiary
 * @param from id of the token that received the donation  
 * 
 */

  function claimDonation (uint256 to, uint256 from ) public payable nonReentrant {
    
    uint256 valueClaimed = claimable(to, from);
    require(
      valueClaimed > 0, "claimDonation: There are no funds to be claimed for this pair (beneficiary, claimee)" 
    );
    
    uint256 claimer_cut = ( valueClaimed ) / 100; // 1% claim fee
    emit DonationClaimed(from, to, valueClaimed);
    _totalClaimed[from] += valueClaimed;
    _balanceClaimed[to][from] += valueClaimed;

    address payable beneficiary = payable( ownerOf(to) );

    (bool success, ) = beneficiary.call{value: valueClaimed - claimer_cut}("");
    require(success, "claimDonation: Transfer of beneficiary's funds failed");
    
    (bool success_, ) = payable(msg.sender).call{value: claimer_cut}("");
    require(success_ , "claimDonation: Transfer of claimer's funds failed");
  }
  

  function setFollowMe (uint256 from, uint256 to) public {
    require(msg.sender == _ownerOf(from), 'only owner of the token can set a follow me ');
    _followMe[from] = to;
  }

  // withdraw treasure?
  // opensea royalties?

}