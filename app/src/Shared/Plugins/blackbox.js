const SESSION_BYTE = 128;

/**
 * @implements {IBlackBox}
 */
export class BlackBox {
    /** @type {ICryptoProvider} */
    __crypto;
    /** @type {IValidator} */
    __validator;

    /**
     * @param {ICryptoProvider} crypto
     * @param {IValidator} validator 
     */
    constructor(crypto, validator) {
        this.__crypto = crypto;
        this.__validator = validator;
    }

    /** create initial state
     * 
     * @returns {Promise<[string, string]>} 
     */
    async genesis() {
        var token = this.__crypto.randomBytes(SESSION_BYTE);
        var packed = this.__crypto.pack(token);
        var hashed = await this.__crypto.digest(token);
        var packedHash = this.__crypto.pack(hashed);
        var snapshot = await this.__validator.init(packedHash);
        return [packed, snapshot];
    }

    /** create snapshot of the state
     * 
     * @param {IEventData} event
     * @param {string} prev 
     * @returns {Promise<string>} - new snapshot
     */
    async snapshot(event, prev) {
        return this.__validator.snap(event, prev);
    }

    parse(data) {
        return this.__validator.parse(data);
    }

    setup(data) {
        return this.__validator.setup(data);
    }
}