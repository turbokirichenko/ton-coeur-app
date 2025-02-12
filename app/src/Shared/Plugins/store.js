/**
 * @implements {IStore}
 */
export class Store {
    /** @type {Storage} */
    __origin;

    constructor() {
        if (window.sessionStorage) {
            this.__origin = window.sessionStorage;
        } else {
            const map = new Map();
            this.__origin = {
                key: (index) => null,
                setItem: map.set,
                getItem: map.get,
                length: map.size,
                removeItem: map.delete,
                clear: map.clear
            }
        }
    }
    async setItem(key, data) {
        this.__origin.setItem(key, data);
    }
    async getItem(key) {
        return this.__origin.getItem(key);
    }
}