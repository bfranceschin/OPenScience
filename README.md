# Open Science Project
- [Mission/OPSPlatform](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#missionopsplatform)
- [Introducing Graph-Funding Technology](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#introducing-graph-funding-technology)
- [Overview of the problem](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#overview-of-the-problem)
- [OPSPlatform application](https://github.com/bfranceschin/encode-metaverse-hackathon#opsplatform-application)

## Mission/OPSPlatform
The **Open Science Project**'s mission is to make access to scientific information free and accessible to everyone while enabling scientists to receive funding for their endeavors.

The first step in this mission is **OPen Science Platform**, a dapp where users can donate Ether to scientific works registered as NFTs. These NFTs can register other NFTs as reference and split the donation revenue with them, forming a big **funding graph** for scientific works. Aside from being a funding platform, it is also a publishing platform. Anyone with an Ethereum address can register works as NFTs and upload the related documents that will be stored using IPFS. Once that is done, a link to the paper is provided in the platform, making it **accessible to everyone**!!

## Introducing Graph-Funding technology

The main key innovation that OPSPlatform introduces is the possibility to hardcode how the protocol will split the money received by the works between its author and all the other authors cited as references. That is crucial because every great scientific work is enabled by many others who came before it. **WE ARE ALL STANDING ON THE SHOULDERS OF GIANTS!**

As a result of this dynamic of coded referencing between the registered works, a big _graph_ emerges, a **Funding Graph**. The money received by a given work, directly and indirectly as a reference, will be split with the works cited by its author as reference. The links between the NFTs will form many paths to the donated money. **THE PATH OF MONEY IS GONNA FOLLOW THE PATH OF KNOWLEDGE!**

The image below shows a simple representation of this dynamic: the graph shown is formed by four works; #1 references all the other three; #2 references #3 and #4; and #3 references #4. Here, the owner of #4 will be able to withdraw a part of every donation made to any of the four works. This fraction is determined a priori by the smart contract running the application according to some local variables. The dotted arrows show how this graph can be linked to others by reference. In practice, the ecosystem may have multiple clusters representing the various fields of study, all formed by subgraphs like the one in the image.

![Figure 1 Subgraph](images/sub_graph_OPSP.drawio.png)

This model guarantees that the most impactful works will receive the most funds. The judges will be the community using the platform.

## Overview of the problem
This platform aims to solve the problem of both inefficiencies in scientific funding and restrictions to access to scientific information. One leads to the other. To make science open and free, we must address them simultaneously.
### Funding sources
Currently, the funding of scientific work comes mainly from these three sources:
1. Industry
2. Governments
3. Universities (many of which receive funding from the other 2 above)

Firstly, funding by industry can be inneficient due to the fact that many sectors are dominated by a few big players. Because of that, scientific advances in those sectors can be coopted by these agents' interest, often misaligned with innovation and aligned with the maintenance of dominance. Examples of that can be seen in episodes of conflict of interests (CoI) in scientific research in many fields, e.g., nutritional science. [[1]](https://www.cambridge.org/core/journals/public-health-nutrition/article/food-company-sponsorship-of-nutrition-research-and-professional-activities-a-conflict-of-interest/0DC05EE7794D352882D2F089111A0449) [[2]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1764435/)

Secondly, government agents' decisions are driven mainly not by scientific but by political agendas. Decisions in this sphere often represent advances that do not interest most people. We could come up with an endless list of examples. Still, there is a single one that will do the trick: the infamous Project Manhattan, which developed the tech used in nuclear bombs, cost about 2 billion 1940s dollars (the equivalent of about 23 billion in 2020s dollars).

Thirdly, in universities, decisions regarding funding scientific research are fairly centralized at the top faculty. As such, it is not only susceptible to bad calls by a few people but also by CoI, given the two points raised above and the fact that universities receive funding from the other two source types.

The fact of the matter is that, currently, there is a lack of a system in which individuals can _directly_ contribute to scientific projects. This role is delegated instead to the aforementioned organizations. Even if a platform can provide this, it is relatively difficult to raise popular funding to abstract projects with high levels of expertise that most people lack. Moreover, authors should be paid more directly and proportionally for the impact their work generates.

**Solution:** An alternative to mitigate this is to enable the authors of past scientific works that have already produced concrete results and had a significant impact on society, as judged by the very people who benefited from it, to receive contributions for their work. This possibility can not only enable these scientists to fund other projects but also serve as an incentive for scientific development. Using Graph Funding Technology, we make the payments generated through community contributions proportional to how impactful the works are.

Blockchain is arguably the **most powerful tool** ever created in regard to the **funding of public goods.** **LET'S LEVERAGE IT TO CAUSE A HUGE IMPACT IN SCIENCE!!!**

### Access to scientific information
It should be uncontroversial to say that scientific info should be open to all. The more open it is, the greater the probability of a scientific breakthrough happening. Today, critical scientific works are often hidden behind paywalls and owned by a few big platforms. That is mainly due to the model of funding outlined above. Please think of how many fantastic opportunities for advancing science we lose every day due to this current model.

**Solution:** A platform that enables authors to obtain revenue for their work while keeping it in the PUBLIC DOMAIN.

## OPSPlatform application

The **OPen Science Platform** will be implemented via smart contract and deployed in [Optimism](https://www.optimism.io/). Optimism is a layer 2 solution in Ethereum that uses a tech called _optimistic rollup_ to reach higher scalability than layer 1 but still enjoy a relatively high level of security, limited, of course, by the layer 1 in which it operates. 

We chose Optimism not only because it is one of the best solutions out there to enjoy a high-security network with relatively low fees but also because the community behind it is deeply interested in fomenting practical solutions to **public funding problems**. Of course, we, the team behind Open Science Project, share this interest and passion, which is why we dedicated ourselves to developing this application.

### Smart Contract
We use a variation of the ERC-721 token standard with adaptations to provide the above functionalities. To see the basic implementations of the standard used, visit [openzeppelin docs](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721) and check out `ERC721` and `ERC721URIStorage`. Below we discuss the main adaptations made to the standart.

#### createToken
The function `createToken` allows an author to register his work as an NFT. The function receives a string, `tokenUri`, to be set as metadata and a list of integers, `refs`, to be set as references.
```solidity
function createToken (string memory tokenURI, uint256[] memory refs) public returns(uint256) { ... }

```

#### donate
The function `donate` allows users to donate Ether to an individual NFT. It is a payable function and receives an integer, `tokenId`, that represents the id of the token inside the contract. It also takes a percentage of the donation to the [treasury](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) of the protocol.
```solidity
function donate (uint256 tokenId) public payable nonReentrant { ... }

```
#### claimToOwner
`claimToOwner` is a public function that allows anyone to pull value in Ether from the balance of a particular NFT to its owner's address in exchange for a percentage fee on the value claimed.
```solidity
function claimToOwner (uint256 tokenId ) public nonReentrant { ... }

```

#### claimToRef
`claimToRef` is a public function that allows anyone to pull a donated value to the balance mapping of an NFT cited as a reference in another NFT in exchange for a percentage fee on the value claimed. It receives an integer, `to`, representing the NFT suposed to receive the funds and an integer, `from`, representing the NFT from which the funds are claimed. 
```solidity
function claimToRef (uint256 to, uint256 from) public nonReentrant { ... }
  
```
#### claimable
The function `claimable` calculates how much of the total donated to a particular NFT is claimable by a particular beneficiary. It receives an integer, `to`, representing the NFT that has a claim over the donation, and an integer, `from`, representing the NFT that received the donation directly. It returns an integer representing the value over which `to` has a claim. It is called inside both claimToOwner and claimToRef, but it is also callable from outside the contract so claimers (searchers) can check profit opportunities.
```solidity
function claimable (uint256 to, uint256 from) public view returns (uint256) { ... }
  
```
#### setFollowMe
This function allows an author to set a tracker from a particular NFT to another NFT. The protocol automatically sends every donation received by one id to the other. We created this function because the protocol does not allow for reference list updates. When an author wants to update the reference list, perhaps because he wants to add a reference that previously did not have an NFT, he needs to create a new NFT. By using setFollowMe he assures that every donation sent to the old NFT will be received by the new one and split in the new way according to the updated list.

The function receives two integers,`from` and `to`, and diverts every fund sent to `from` to `to`. It is only callable by the owner of NFT `from`.
```solidity
function setFollowMe (uint256 from, uint256 to) public { ... }

```
setFollowMe simply updates a mapping. This mapping is used by the function `donate` to direct the donation to the NFT set in the previous function.

### Treasury/DAO
As already pointed out, a percentage of the donations are taxed by the protocol and sent to a treasury. The intention is to, eventually, implement a DAO-like governance to decide how to allocate said funds to better the platform and fund other initiatives that might benefit the community. The DAO will also be responsible for changes in parameters like the _treasury tax_, the _claimer's fee_ and the _split between authors and references_.

### Claimers (searchers)
As seen above, both pull functions are callable by any address. These functions send, according to some state variables, part of the balance of a particular NFT to its owner/references. The protocol pays a percentage fee over the value being claimed to the function's caller to encourage people to call said functions and provide this service. We expect that the profit opportunity that emerges from this dynamic will give rise to searchers (which we call _claimers_) who constantly monitor the paltform looking for profit opportunities. That is why the function `claimable` is a public function, so these searchers can more easily check if a given transaction is profitable or not. 

These searchers, or _claimers_, will manifest in the form of bots run by scripts to execute this task. Once enough searchers act in this manner, the distribution of funds by the platform will be automated, making the operation quicker and more efficient.

### Future work
- Deployment on optimism mainnet
- Integrate The Graph to improve the frontend scalability
- Certification system to prevent fraud and scams
- Onboarding of pre-existing works
- Collectibles reward program for users
