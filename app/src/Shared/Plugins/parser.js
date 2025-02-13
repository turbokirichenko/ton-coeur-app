/**
 * @implements {ISnapshotParser}
 */
export class SnapshotParser {
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