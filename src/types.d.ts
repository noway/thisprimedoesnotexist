declare module 'biguint-format' {
    namespace biformat {}
    function biformat(num: Buffer, type: string): string;
    export = biformat;
}