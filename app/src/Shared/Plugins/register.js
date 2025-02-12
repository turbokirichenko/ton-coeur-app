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
     * @returns 
     */
    async payment(data) {
        return "";
    }

    /**
     * 
     * @param {string} signature 
     * @returns 
     */
    async validate(signature) {
        return null;
    }
}