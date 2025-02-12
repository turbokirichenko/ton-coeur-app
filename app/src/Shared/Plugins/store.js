/**
 * @implements {IStore}
 */
export class Store {
    /** @type {Storage | any} */
    __origin;

    constructor() {
        if (window.localStorage) {
            this.__origin = window.localStorage;
        } else {
            throw new Error('this browser not support a localStorage');
        }
    }
    async setItem(key, data) {
        this.__origin.setItem(key, data);
    }
    async getItem(key) {
        return this.__origin.getItem(key);
    }
}