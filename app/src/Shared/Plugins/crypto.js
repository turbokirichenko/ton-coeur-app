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
 * @returns {Promise<CryptoKey>}
 */
const generateAesKey = async () =>
    window.crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256,
    }, true, ['encrypt', 'decrypt']);

/**
 * @param {CryptoKey} key 
 * @returns {Promise<ArrayBuffer>}
 */
const exportAesKey = async (key) => {
    return window.crypto.subtle.exportKey("raw", key);
}

/**
 * @param {ArrayBuffer} raw 
 * @returns {Promise<CryptoKey>}
 */
const importAesKey = async (raw) => {
    return window.crypto.subtle.importKey("raw", raw, {
        name: 'AES-GCM',
        length: 256
    }, true, ['encrypt', 'decrypt']);
}

/**
 * @returns {Uint8Array<ArrayBuffer>}
 */
const generateIv = () => randomBytes(12);

/**
 * @param {string} data 
 * @returns {Uint8Array}
 */
const encode = data => {
    const encoder = new TextEncoder()
    return encoder.encode(data)
}

/**
 * @param {AllowSharedBufferSource} byteStream
 * @returns {string}
 */
const decode = byteStream => {
    const decoder = new TextDecoder()
    return decoder.decode(byteStream)
}

/**
 * @param {string} data 
 * @param {CryptoKey} key 
 * @returns 
 */
const encrypt = async (data, key) => {
    const encoded = encode(data)
    const iv = generateIv()
    const cipher = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, encoded)

    return {
        cipher,
        iv
    }
}

/**
 * @param {ArrayBuffer} cipher 
 * @param {CryptoKey} key 
 * @param {Uint8Array<ArrayBuffer>} iv 
 * @returns 
 */
const decrypt = async (cipher, key, iv) => {
    const encoded = await window.crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, cipher)

    return decode(encoded)
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
    generateKey = generateAesKey;
    generateIv = generateIv;
    encode = encode;
    decode = decode;
    encrypt = encrypt;
    decrypt = decrypt;
}