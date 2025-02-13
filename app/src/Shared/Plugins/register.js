/**
 * @implements {IRegister}
 */
export class Register {
    /** @type {ICryptoProvider} */
    __crypto;
    /** @type {string} */
    __token;

    /**
     * @param {ICryptoProvider} crypto;
     */
    constructor(token, crypto) {
        this.__crypto = crypto;
        this.__token = token;
    }

    /**
     * 
     * @param {IPaymentData} data 
     * @returns {Promise<string>}
     */
    async payment(data) {
        var unpackKey = this.__crypto.unpack(this.__token);
        var importToken = await this.__crypto.importKey(unpackKey);
        var dataString = JSON.stringify(data);
        var encryptData = await this.__crypto.encrypt(dataString, importToken);
        console.log('payment', encryptData.cipher, encryptData.iv);
        var dataEncode = window.btoa(JSON.stringify({
            cipher: this.__crypto.pack(encryptData.cipher),
            iv: this.__crypto.pack(encryptData.iv),
        }))
        return dataEncode;
    }

    /**
     * 
     * @param {string} signature 
     * @returns {Promise<IPaymentData>}
     */
    async validate(signature) {
        try {
            var unpackKey = this.__crypto.unpack(this.__token);
            var importToken = await this.__crypto.importKey(unpackKey);
            var dataDecoded = window.atob(signature);
            var { cipher, iv } = JSON.parse(dataDecoded);
            var cipherByte = this.__crypto.unpack(cipher);
            var ivByte = new Uint8Array(this.__crypto.unpack(iv));
            var decrypted = await this.__crypto.decrypt(cipherByte, importToken, ivByte);
            return JSON.parse(decrypted);
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}