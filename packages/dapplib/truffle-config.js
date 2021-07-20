require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reward stick unveil half arena food skirt'; 
let testAccounts = [
"0xc977abd3bdb2799bdfb5ebda066424f4e7af287bef90760533815862093239bb",
"0x0d124d31f0c85892a3c2266f9771d069b2289aee797bdb21ffc30c16b1f2f1f8",
"0x990b0e8f5f617659c1f83c634501a0d95a438cd2c2f911e08923b68b3ce98ec3",
"0x5f08a088d96100c6862c455562734b8a8204c1575333e7dfa421ebbcdc890107",
"0xd9693a69dbf192717e940c7295ea7a6f6f1f0d07cb9ef6b6326a622518a5559c",
"0xaf81a2d4b0d1a38122cfb6fb50570aaff8973c825d1e883d886478d79e3b343c",
"0x08dfeab0fd1528ed1b7667735be307f1d4d7f867b0cb727854542988c1ecab0e",
"0x82a7d8f76bd53ae55c3b792a2d2a75aae97168d7987bafa0720cd04bc02af5b3",
"0x9b08506dbfe12d3754102dad6a324342848214f18a1a357ce0319c12e4af71d4",
"0xc3112a0a1639155c36e8e421919b2e09b2766ab9927f584228aaf1da81b4fc88"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


