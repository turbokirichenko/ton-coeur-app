/**
 * @implements {IRegister}
 */
export class Register {
    /** @type {ICryptoProvider} */
    __crypto;
    /** @type {string} */
    __token;
    /** @type {ISnapshotParser} */
    __parser;

    /**
     * @param {ICryptoProvider} crypto;
     */
    constructor(token, crypto, parser) {
        this.__crypto = crypto;
        this.__token = token;
        this.__parser = parser;
    }

    /** make a payment
     * 
     * @param {IPaymentData} data 
     * @returns {Promise<string | null>}
     */
    async payment(data) {
        try {
            var direct = await this.__verify(data);
            if (!direct) {
                throw new Error('Data is not valid. Please check the hashsum!')
            }
            var unpackKey = this.__crypto.unpack(this.__token);
            var importToken = await this.__crypto.importKey(unpackKey);
            var dataString = this.__makeDataString(data);
            var encryptData = await this.__crypto.encrypt(dataString, importToken);
            var dataEncode = window.btoa(`${this.__crypto.pack(encryptData.cipher)},${this.__crypto.pack(encryptData.iv)}`);
            return dataEncode;
        } catch (err) {
            return null;
        }
    }

    /** verify information from the IPaymentData
     * 
     * @param {IPaymentData} data 
     * @returns {Promise<boolean>}
     */
    async __verify(data) {
        try {
            const {genesis, snapshot} = data;
            const parsed = this.__parser.parse(snapshot);
            var token = this.__crypto.unpack(genesis);
            var hashed = await this.__crypto.digest(new Uint8Array(token));
            var packedHash = this.__crypto.pack(hashed);
            return packedHash === parsed.genesis;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    /** verify information from the IPaymentData
     * 
     * @param {IPaymentData} data 
     * @returns {string}
     */
    __makeDataString(data) {
        var parsed = this.__parser.parse(data.snapshot);
        return `${data.key},${parsed.nonce},${data.from},${data.to}`;
    }

    /** parse data string
     * 
     * @param {string} dataString
     * @returns {IGiftData}
     */
    __parseDataString(dataString) {
        var strArray = dataString.split(',');
        return {
            grade: Number(strArray[0]),
            count: Number(strArray[1]),
            from: strArray[2],
            to: strArray[3]
        }
    }

    /** validate a payment signature
     * 
     * @param {string} signature 
     * @returns {Promise<IGiftData | null>}
     */
    async validate(signature) {
        try {
            var unpackKey = this.__crypto.unpack(this.__token);
            var importToken = await this.__crypto.importKey(unpackKey);
            var dataDecoded = window.atob(signature);
            var [ cipher, iv ] = dataDecoded.split(',');
            var cipherByte = this.__crypto.unpack(cipher);
            var ivByte = new Uint8Array(this.__crypto.unpack(iv));
            var decrypted = await this.__crypto.decrypt(cipherByte, importToken, ivByte);
            return this.__parseDataString(decrypted)
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}