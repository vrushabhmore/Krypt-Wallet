// https://eth-sepolia.g.alchemy.com/v2/mz1MLm2JuVm8c-yJnBBUT8o3IC2PVb4X

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/mz1MLm2JuVm8c-yJnBBUT8o3IC2PVb4X",
      accounts: ['870135f66908ca0d33b7a46516a307334dbb55417d378dc3fa682a82a4525619']
    }
  }
}