# Open Science Project
- [Mission/OPSPlatform](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#missionopsplatform)
- [Introducing Graph-Funding Technology](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#introducing-graph-funding-technology)
- [Overview of the problem](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#overview-of-the-problem)
- [OPSPlatform application](https://github.com/bfranceschin/encode-metaverse-hackathon#opsplatform-application)

## Mission/OPSPlatform
The **Open Science Project**'s mission is to contribute to make the access to scienfic information free an accessible to everyone, while enabling scientists to receive funding for their endeavors.

The first step in this mission is **OPen Science Platform**, a platform where users can donate Ether to scientific works registered as NFT's. These NFT's can register other NFT's as reference and split the donation revenue with them, forming a big **funding graph** for scientific works. Anyone with an ethereum address can register a work as a NFT. Aside from being a funding platform it is also a publishing platform. When registering their work as a NFT authors can upload documents which are gonna be stored using IPFS. Once that is done a link to the document is provided in the platform making it **accessible to everyone**!!

## Introducing Graph-Funding technology
The key main innovation that OPSPlatform introduces is the possibility to hardcode how the money received by the scientific works is gonna be split between its own author and all the other authors cited as references. That is crucial because every great scientific work is enabled by many others who came before it. **WE ARE ALL STANDING ON THE SHOULDERS OF GIANTS!**

As a result of this dynamic of coded referencing between the registered works, a big _graph_ emerges, a **Funding Graph**. The money received by a given work, be directly or indirectly as a reference, is gonna be split with the works cited by its author as reference. The links between the NFTs are gonna form many different paths to the money being donated. **THE PATH OF THE MONEY IS GONNA FOLLOW THE PATH OF KNOWLEDGE!**

The image below shows a simple representation of this dynamic: the graph shown is formed by four works; #1 references all the other three; #2 references #3 and #4; and #3 references #4. In this instance, a part of every donation made in favor of any of the four works will be withdrawable by the owner of #4. This fraction is determined a priori by the smart contract running the application in accordance with some local variables. The dotted arrows show how this graph can be linked to others by way of reference. In practice, the ecosystem may have multiple clusters representing the various fields of study, all formed by subgraphs like the one in the image.

![Figure 1 Subgraph](images/sub_graph_OPSP.drawio.png)

This model guarantees that the most important works-that is, the works that have a the biggest impact-are gonna receive the most funds. In the end, that is gonna be decided by the very people who benefit the most from the science: us and the authors who build upon each others work.

## Overview of the problem
The problem that this platforms aims to solve is twofold. It's a product of both inneficiencies in the funding of scientific endeavors and restrictions to the access of scientific information. One leads to the other. To make Science open and free we need to address them both simultaneously.
### Funding sources
Currently, the funding of scientific work comes mainly from these 3 sources:
1. Industry
2. Governments
3. Universities (many of which receive funding from the other 2 above)

Firstly, funding by part of the industry can be inneficient due to the fact that many sectors are dominated by a few big players. Because of that, scientific advances in those sectors can be coopted by these agents' interest, which often are gonna be misaligned with innovation and aligned with the maintenance of dominance. Examples of that can be seen in episodes of conflict of interests (CoI) in scientific research in many fields, e.g. nutritional science. [[1]](https://www.cambridge.org/core/journals/public-health-nutrition/article/food-company-sponsorship-of-nutrition-research-and-professional-activities-a-conflict-of-interest/0DC05EE7794D352882D2F089111A0449) [[2]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1764435/)

Secondly, decisions taken by agents in government are driven mainly, not by scientific, but by political agendas. Decisions in this sphere often represent advances that do not interest most of the people. We could come up with an endless list of examples, but there is a single one that will do the trick: the infamous Project Manhatam that developed the tech used in nuclear bombs cost about 2 bilion 1940s dollars (the equivalent of about 23 bilion in 2020s dollars).

Thirdly, in universities, decisions regarding the funding of scientific research are fairly centralized at the top of the faculty. As such, it is not only susceptible to bad calls by few people, but also by CoI, given the two points raised above and the fact that universities receive funding by the other 2 source types.

The fact of the matter is that, currently, there is a lack of a system in which individuals can _directly_ contribute to scientific projects. This role is instead delegated to the aforementioned organizations. Even if there is a platform that can provide this, it is relatively difficult to raise popular funding to abstract projects with high levels of expertise that most people lack. Moreover, authors are not paid direcly proportional to the impact their work generate.

**Solution:** An alternative to mitigate this is to enable the authors of past scientific works, that have already produced concrete results and had significant impact in society, as judged by the very people who benefited from it, to receive contributions for their work. This possibility can, not only enable these scientists to fund other projects, but also serve as a incentive to scientific development. Using the aforementioned Graph Funding Technology we make the payments generated through community contributions proportional to how impactful the works are.

Blockchain is arguably the **most powerful tool** ever created in regards to the **funding of public goods**. **LET'S LEVERAGE IT TO CAUSE A HUGE IMPACT IN SCIENCE!!!**

### Access to scientific information
It should be uncontroversial to say that scientific info should be open to all. The more open it is, the greater the probability of a scientific breakthrough happening. Today, very important scientific works are often hidden behind paywalls and owned by a few big platforms. That is mainly due to the model of funding outlined above. Think of how many wonderful opportunities of advancing science we lose every day due to this current model.

**Solution:** A platform that enables authors to obtain revenue for their work while keeping it in the PUBLIC DOMAIN.

## OPSPlatform application

The **OPen Science Platform** is gonna be implemented via smart contract and deployed in [Optimism](https://www.optimism.io/). Optimism is a layer 2 solution in Ethereum that uses a tech called _optimistic rollup_ to reach higher scalability than its layer 1 but still enjoy a relatively high level of security, limited of course by the layer 1 in which it operates. 

We chose Optimism not only because it is one of the best solutions out there to enjoy a high security network with relatively low fees, but also because the community behind it is deeply interested in fomenting practical solutions to **public funding problems**. Of course we, the team behind Open Science Project, share this interest and passion, reason why we dedicated ourselves to developing this application.

### Smart Contract
We use a variation of the ERC-721 token standart, with adaptations made to provide the funcionalities outlined above. To see the basic implementations of the standart used visit [openzeppelin docs](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721) and check out `ERC721` and `ERC721URIStorage`. Below we discuss the main adaptations made to the standart.

#### createToken
The function `createToken` allows a author to register his work as a NFT. The funtion receives a string, `tokenUri`, to be set as metadata and a list of integers, `refs`, to be set as references.
```solidity
function createToken (string memory tokenURI, uint256[] memory refs) public returns(uint256) { ... }

```

#### donate
The function `donate` allows users to donate Ether to an individual NFT. It is a payable function and receives a integer, `tokenId`, that represents the id of the token inside the contract. It also takes a percentage of the donation to the [treasury](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) of the protocol.
```solidity
function donate (uint256 tokenId) public payable nonReentrant { ... }

```
#### claimToOwner
`claimToOwner` is a public function that allows anyone to pull value in Ether from the balance of a particular NFT to the address of its owner in exchange of a percentage fee on the value claimed.
```solidity
function claimToOwner (uint256 tokenId ) public nonReentrant { ... }

```

#### claimToRef
`claimToRef` is a public function in that allows anyone to pull a donated value to the balance mapping of a NFT cited as reference in another NFT in exchange of a percentage fee on the value claimed. It receives an integer, `to`, that represents the id of the NFT that is suposed to receive the funds and an integer, `from`, that represents the id of the NFT from which the funds are being claimed. 
```solidity
function claimToRef (uint256 to, uint256 from) public nonReentrant { ... }
  
```
#### claimable
The function `claimable` is used to calculate how much of the total donated to a particular NFT is claimable by a particular beneficiary. It receives a integer, `to`, representing the token id that has the claim over the donation and a integer, `from`, representing the NFT that received the donation directly. It returns a integer representing the value that can be claimed. It is called inside both claimToOwner and claimToRef but it is aslo callable from outside the contract so claimers (searchers) can check profit opportunities
```solidity
function claimable (uint256 to, uint256 from) public view returns (uint256) { ... }
  
```
#### setFollowMe
This function allows a author to set a tracker from a particular NFT id to another NFT id. When that is done, every donation sent to one id is automatically sent to the other. This function was created because the protocol does not allow for reference list updates. When a author wants to update the reference list, perhaps because he wants to add a reference thar previously did not have a NFT, he needs to create a new NFT. By using setFollowMe he assures that every donation sent to the old NFT is gonna be received by the new one and split in the intended manner through the updated list.

The function receives an integer, `from`, representing the NFT id from which the donations should be diverted and an integer, `to`, representing the NFT id that the funds should be diverted to. It is only callable by the owner of NFT `from`.
```solidity
function setFollowMe (uint256 from, uint256 to) public { ... }

```
setFollowMe simply updates a mapping. This mapping is used by the function `donate` to direct the donation to the NFT set in the previous function.

### Treasury/DAO
As already pointed out, a percentage of the donations are taxed by the protocol and sent to a treasury. The intention is to, eventually implement a DAO like governance to decide how to allocate said funds to better the platform and/or fund other iniciatives that might benfit the community. The DAO is also gonna be responsible for changes in parameters like the _treasury tax_, the _claimer's fee_ and the _split between authors and references_.

### Claimers (searchers)
As can be seen above, both pull functions are callable by any address. The functions are programed to sent the right amout, in accordance with some state variables to the owner/reference of the a particular NFT. To encourage people to call said functions and provide this service, the protocol pays a percentage fee to the address that calls the function. What is expected by that is that the profit opportunity that emerges from this dynamic will give rise to searchers (which we call _claimers_) that will be constantly monitoring the paltforms looking for profit opportunities. That is the reason why the funtcion `claimable` is a public function, so this searchers can more easily check if a given transaction is profitable or not. 

This searchers, or _claimers_, will manifest in the form of bots, run by scripts to execute this task. Once there are enough searchers acting in this manner the distribution of funds by the platform will be automated making the operation quicker and more efficient.