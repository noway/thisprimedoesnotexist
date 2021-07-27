/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-default-export */
declare module 'biguint-format' {
    namespace biformat {}
    function biformat(num: Buffer, type: string): string;
    export = biformat;
}