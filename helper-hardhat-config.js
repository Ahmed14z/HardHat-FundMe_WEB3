const networkConfig = {
    5: {
        name: "Goerili",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
}

const developmentChains = ["hardhat", "localhost"]
const decimals = 8
const Initial_Answer = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    decimals,
    Initial_Answer,
}
