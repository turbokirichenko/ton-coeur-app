const MIN_DELAY_INTERVAL = 25;

/**
 * @implements {IValidator}
 */
export class Validator {
    constructor() {}

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
        return this.setup(snapshot)
    }

    /** update snapshot
     * 
     * @param {IEventData} eventData
     * @param {string} snapshot 
     * @returns 
     */
    async snap(eventData, snapshot) {
        const parsed = this.parse(snapshot);
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

    /** parse snapshot
     * 
     * @param {string} snapshotBase64 - base64 encoded snapshot
     * @returns {ISnapshot}
     *  
     */
    parse(snapshotBase64) {
        var symbols = (window.atob)
            ? window.atob(snapshotBase64)
            : Buffer.from(snapshotBase64, 'base64').toString();
        return JSON.parse(symbols);
    }

    /** encode snapshote
     * 
     * @param {ISnapshot} snapshot 
     * @returns {string} - base64 encoded snapshot
     */
    setup(snapshot) {
        var symbols = JSON.stringify(snapshot);
        return (window.btoa) 
            ? window.btoa(symbols) 
            : Buffer.from(symbols).toString('base64')
    }
}