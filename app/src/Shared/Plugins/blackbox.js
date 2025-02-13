const SESSION_BYTE = 128;

/**
 * @implements {IBlackBox}
 */
export class BlackBox {
    /** @type {ICryptoProvider} */
    __crypto;
    /** @type {IValidator} */
    __validator;
    /** @type {ISnapshotParser} */
    __parser;

    /**
     * @param {ICryptoProvider} crypto
     * @param {IValidator} validator 
     * @param {ISnapshotParser} parser
     */
    constructor(crypto, validator, parser) {
        this.__crypto = crypto;
        this.__validator = validator;
        this.__parser = parser
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
        return this.__parser.parse(data);
    }

    setup(data) {
        return this.__parser.setup(data);
    }
}