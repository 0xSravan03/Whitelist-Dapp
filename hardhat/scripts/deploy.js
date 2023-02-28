const { ethers } = require("hardhat")

// contract address on goerli : 0xcEbEF944e2fbe18de222A22157E86AeB21507940

async function main() {
    const WhitelistFactory = await ethers.getContractFactory("Whitelist")

    // Deploying Contract
    const contract = await WhitelistFactory.deploy("5")
    await contract.deployed()
    console.log(`Contract Deployed at address : ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
