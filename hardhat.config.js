require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/sg_ohJQ3YPjUAAqXac64WWsLNIo_nb7l',
      accounts: ['a5006f5b79435c8346700c15e9f9036cc3b48c55808552c2b5778188dfc2fc0a'],
    },
  },
};