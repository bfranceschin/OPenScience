# Open Science Project
- [Mission/OPSPlatform](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#missionopsplatform)
- [Introducing Graph-Funding Technology](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#introducing-graph-funding-technology)
- [Overview of the problem](https://github.com/bfranceschin/encode-metaverse-hackathon/blob/main/README.md#overview-of-the-problem)
- [OPSPlatform Architecture]()

## Mission/OPSPlatform
The **Open Science Project**'s mission is to contribute to make the access to scienfic information free an accessible to everyone, while enabling scientists to receive funding for their endeavors.

The first step in this mission is **OPen Science Platform**, a platform where users can donate Ether to scientific works registered as NFT's. These NFT's can register other NFT's as reference and split the donatmion revenue with them, forming a big **funding graph** for scientific works. Anyone with an ethereum address can register a work as a NFT. Aside from being a funding platform it is also a publishing platform. When registering their work as a NFT authors can upload documents which are gonna be stored using IPFS. Once that is done a link to the document is provided in the platform making it **accessible to everyone**!!

## Introducing Graph-Funding technology
The key main innovation that OPSPlatform introduces is the possibility to hardcode how the money received by the scientific works is gonna be split between its own author and all the other authors cited as references. That is crucial because every great scientific work is enabled by many others who came before it. WE ARE ALL STANDING ON THE SHOULDERS OF GIANTS! As a result of this dynamic of coded referencing between the registered works, a big _graph_ emerges, a **Funding Graph**. The money received by a given work, be directly or indirectly as a reference, is gonna be split with the works cited by its author as reference. 

The image below shows a simple representation of this dynamic: the graph shown is formed by four works; #1 references all the other three; #2 references #3 and #4; and #3 references #4. In this instance, a part of every donation made in favor of any of the four works will be withdrawable by the owner of #4. This fraction is determined a priori by the smart contract running the application in accordance with some local variables. The dotted arrows show how this graph can be linked to others by way of reference. In practice, the ecosystem may have multiple clusters representing the various fields of study, all formed by subgraphs like the one in the image.

![Figure 1 Subgraph](images/sub_graph_OPSP.drawio.png)

This model guarantees that the most important works, that is the works that have a the biggest impact, are gonna receive the most funds. In the end, that is gonna be decided by the very people who benefit the most from the science: us and the authors who build upon each others work.

## Overview of the problem
The problem that this platforms aims to solve is twofold. It's a product of both inneficiencies in the funding of scientific endeavors and restrictions to the access of scientific information. One leads to the other. To make Science open and free we need to address them both simultaneously.
### Funding sources
Currently, the funding of scientific work comes mainly from these 3 sources:
1. Industry
2. Governments
3. Universities (many of which receive funding from the other 2 above)

Firstly, funding by part of the industry can be inneficient due to the fact that many sectors are dominated by a few big players. Because of that scientific advances in those sectors can be coopted by these agents' interest, which often are gonna be misaligned with innovation and aligned with the maintenance of dominance. Examples of that can be seen in episodes of conflict of interests (CoI) in scientific research in many fields, e.g. nutritional science [1](https://www.cambridge.org/core/journals/public-health-nutrition/article/food-company-sponsorship-of-nutrition-research-and-professional-activities-a-conflict-of-interest/0DC05EE7794D352882D2F089111A0449) [2](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1764435/).

Secondly, decisions taken by agents in government are driven, mainly, not by scientific, but by political agendas. Decisions in this sphere often represent advances that do not interest most of the people. We could come up with an endless list of examples, but there is a single one that will do the trick: the infamous Project Manhatam that developed the tech used in nuclear bombs cost about 2 bilion 1940s dollars (the equivalent of about 23 bilion in 2020s dollars).

Thirdly, in universities, decisions regarding the funding of scientific research are fairly centralized at the top of faculty. As such it is not only susceptible to bad calls by few people, but also by CoI, given the two points raised above and the fact that universities receive funding by the other 2 source types.

The fact of the matter is that, currently, there is a lack of a system in which individuals can _directly_ contribute to scientific projects. This role is instead delegated to the aforementioned organizations. Even if there is a platform that can provide this, it is relatively difficult to raise popular funding to abstract projects with high levels of expertise that most people lack.

**Solution:** An alternative to mitigate this is to enable the authors of past scientific works, that have already produced concrete results and had significant impact in society, as judged by the very people who benefited from it, to receive contributions for their work. This possibility can, not only enable these scientists to fund other projects, nut also serve as a incentive to scientific development. Blockchain is arguably the most powerful tool ever created in regards to the funding of public goods. LET'S LEVERAGE IT TO CAUSE A HUGE IMPACT IN SCIENCE!!!

### Access to scientific information
It should be uncontroversial to say that scientific info should be open to all. The more open it is, the greater the probability of a scientific breakthrough happening. Today, very important scientific works are often hidden behind paywalls and owned by a few big platforms. That is mainly due to the model of funding outlined above. 

**Solution:** A platform tha enables authors to obtain revenue for their work while keeping it in the PUBLIC DOMAIN.

## OPSPlatform Documentation
