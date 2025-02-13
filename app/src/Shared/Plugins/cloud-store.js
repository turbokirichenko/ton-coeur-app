import WebApp from "@twa-dev/sdk";

/**
 * @implements {IStore}
 */
export class CloudStore {
    /** @type {typeof WebApp.CloudStorage} */
    __cloud;

    constructor () {
        this.__cloud = WebApp.CloudStorage;
    }

    async getItem(key) {
        try {
            const result = await this.__cloudGetItem(key);
            return result;
        } catch (err) {
            throw new Error('error occur while connect to cloud store!');
        }
    }

    async setItem(key, data) {
        try {
            const result = await this.__cloudSetItem(key, data);
            return result;
        } catch (err) {
            throw new Error('error occur while connect to cloud store!');
        }
    }

    async __cloudSetItem(key, data) {
        return new Promise((resolve, reject) => {
            if (this.__cloud) {
                this.__cloud.setItem(key, data, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                })
            }
        })
    }
    
    async __cloudGetItem(key) {
        return new Promise((resolve, reject) => {
            if (this.__cloud) {
                this.__cloud.getItem(key, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                })
            }
        })
    }
    
    async __cloudKeys(key, data) {
        return new Promise((resolve, reject) => {
            if (this.__cloud) {
                this.__cloud.getKeys((err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            }
        })
    }
}