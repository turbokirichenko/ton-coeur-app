/** generate hash
 * 
 * @param {Uint8Array<ArrayBuffer>} data 
 * @returns {Promise<ArrayBuffer>}
 */
const digest = async (data) => {
    return window.crypto.subtle.digest('SHA-256', data);
}

/** generate random byte sequence
 * 
 * @param {number} size 
 * @returns {Uint8Array<ArrayBuffer>}
 */
const randomBytes = (size) =>
    window.crypto.getRandomValues(new Uint8Array(size));

/**
 * 
 * @param {ArrayBuffer | Uint8Array<ArrayBuffer>} buffer 
 * @returns 
 */
const pack = buffer => window.btoa(
    String.fromCharCode.apply(null, new Uint8Array(buffer))
)

/**
 * 
 * @param {string} packed 
 * @returns {ArrayBuffer}
 */
const unpack = packed => {
    const string = window.atob(packed)
    const buffer = new ArrayBuffer(string.length)
    const bufferView = new Uint8Array(buffer)

    for (let i = 0; i < string.length; i++) {
        bufferView[i] = string.charCodeAt(i)
    }

    return buffer
}

/**
 * @implements {ICryptoProvider}
 */
export class Crypto {

    constructor() {
        if (!window.crypto) {
            throw new Error('Your browser is not support this function! Please update')
        }
    }

    randomBytes = randomBytes;
    pack = pack;
    unpack = unpack;
    digest = digest;
}