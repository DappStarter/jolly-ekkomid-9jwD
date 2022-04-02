require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stone remember pumpkin unit harvest canoe army genius'; 
let testAccounts = [
"0xe916d74314d81d315023c6d65c42dc49cc970b9e4b84cc204b3e38ac49b92a2e",
"0x315ce6314e9fed717d49b823e83c3231790739c01929b68f420826461b13d305",
"0xafe9d6bff24e8de42fc76435db801aae6cb458daed98801f4c915e9980d503c3",
"0xdcd330a6dea604b057cad6716a4d29efabaf016ed3ba6e6b7e612e9a02186384",
"0x968327cc82b0b2ff45b76cd600ac1ce15bc0d60ccfe935a8194a71e55a33351b",
"0x2cce625d0117c8b1149fa7bbda2c4ae2cdb26631eb04b308bfe96a783a277161",
"0xe4a68ce537cff227592ab8b062913fae01add09ce240b27e2fb7841de4c50ffa",
"0x3484fa438d8c76724b45c61d222abbd013544024f48b7484b50a278aa57b72f4",
"0x3dad6db68158e9196dbcb0776ca10b44edf8fd1c0143693439304129dc95f498",
"0xc516d428a691aaa32a5b9b00e3acd896a654b836fd05ed4525d1833e3026c7de"
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
            gas: 8000000,
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


