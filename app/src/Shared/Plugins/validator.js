const MIN_DELAY_INTERVAL = 25;

/**
 * @implements {IValidator}
 */
export class Validator {
    /** @type {ISnapshotParser} */
    __parser;

    /**
     * @param {ISnapshotParser} parser 
     */
    constructor(parser) {
        this.__parser = parser
    }

    /** generate initial snapshot for session
     * 
     * @param {string} hashsum 
     * @returns {Promise<string>} base64 encoded string
     */
    async init(hashsum) {
        /** @type {ISnapshot} */
        const snapshot = {
            genesis: hashsum,
            eventData: { clientX: 0, clientY: 0 },
            timestamp: Date.now(),
            nonce: 0,
        }
        return this.__parser.setup(snapshot)
    }

    /** update snapshot
     * 
     * @param {IEventData} eventData
     * @param {string} snapshot 
     * @returns 
     */
    async snap(eventData, snapshot) {
        const parsed = this.__parser.parse(snapshot);
        const current = Date.now();
        if (current - parsed.timestamp < MIN_DELAY_INTERVAL) {
            return snapshot;
        }
        const nonce = parsed.nonce + 1;
        const object /** @type {ISnapshot} */ = {
            genesis: parsed.genesis,
            eventData,
            timestamp: current,
            nonce
        }
        const stringify = JSON.stringify(object);
        return window.btoa(stringify);
    }
}