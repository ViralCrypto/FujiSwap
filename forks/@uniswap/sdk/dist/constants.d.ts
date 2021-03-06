import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}

export declare const FACTORY_ADDRESS = "0x0f7336d4A0d6EB5F8F3DfB263a0B8F9034247a82"; // ropsten "0x1258A4EEEDF6DEd4ca30a88B9a808E4E316A3079";
export declare const INIT_CODE_HASH = "0xe6fd73d4694c9645fea8c0fc494e64870ca04d0972fd38c66185dd41bceb358d"; //ropsten "0x6781ca854ccb216cc8a4ae9c14b234f0f4e9e3a64c3e69ba0e8139ea085cfd97";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
