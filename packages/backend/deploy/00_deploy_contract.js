// deploy/00_deploy_contract

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const args = [];
  await deploy('NFT', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    args: args,
    from: deployer,
    log: true,
  });
  
  
  const chainId = await getChainId();
  // if (chainId === '420') { //goerliOptimism
  if (chainId === '11155111' || chainId === '80001') { //sepolia and mumbai
    // Add initial nfts for testing purposes
    const {owner} = await getNamedAccounts();
    const contract = await ethers.getContract('NFT', owner);

    const bitcoinUri = "ipfs://bafyreihkbv53y7e3ii6miqilo2ax6sn6rjqx3bbs2pngf5b7gx7bzoyada/metadata.json"
    let tx = await contract.createToken(bitcoinUri, [])
    console.log("Adding bitcoin paper: tx ", tx.hash)
    await tx.wait()

    const ethUri = "ipfs://bafyreif5grbboxlq54qzvgomajjo6idghps3zhspesvr4crqjehmrofuma/metadata.json"
    tx = await contract.createToken(ethUri, ["0"])
    console.log("Adding eth paper: tx ", tx.hash)
    await tx.wait()

    const optUri = "ipfs://bafyreia3z7ogps2mjt55bko3pmi63z5esmnwrebpsojfspdsitkfh6fbw4/metadata.json"
    tx = await contract.createToken(optUri, ["0", "1"])
    console.log("Adding eth paper: tx ", tx.hash)
    await tx.wait()

    const arbUri = "ipfs://bafyreifsncnzvabg3dxo5vhmi56giib6lewweyanmtnclvw2qwdr3nbote/metadata.json"
    tx = await contract.createToken(arbUri, ["0", "1"])
    console.log("Adding eth paper: tx ", tx.hash)
    await tx.wait()
  }
};
module.exports.tags = ['all', 'NFT'];
