const { network } = require("hardhat")
const {
    developmentChains,
    decimals,
    Initial_Answer,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        log("local network detected ! Depolying mocks")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [decimals, Initial_Answer],
        })
        log("Mocks Deployed")
        log("-------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
