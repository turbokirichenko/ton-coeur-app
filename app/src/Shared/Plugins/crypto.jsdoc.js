/**
 * @typedef ICryptoProvider
 * @prop {(size: number) => Uint8Array<ArrayBuffer>} randomBytes
 * @prop {(buffer: ArrayBuffer | Uint8Array<ArrayBuffer>) => string} pack
 * @prop {(packed: string) => ArrayBuffer} unpack
 * @prop {(data: Uint8Array<ArrayBuffer>) => Promise<ArrayBuffer>} digest
 * @prop {() => Promise<CryptoKey>} generateKey
 * @prop {() => Uint8Array<ArrayBuffer>} generateIv
 * @prop {(raw: ArrayBuffer) => Promise<CryptoKey>} importKey
 * @prop {(key: CryptoKey) => Promise<ArrayBuffer>} exportKey
 * @prop {(data: string) => Uint8Array} encode
 * @prop {(byteStream: AllowSharedBufferSource) => string} decode
 * @prop {(data: string, key: CryptoKey) => Promise<{cipher: ArrayBuffer, iv: Uint8Array<ArrayBuffer> }>} encrypt
 * @prop {(cipher: ArrayBuffer, key: CryptoKey, iv: Uint8Array<ArrayBuffer>) => Promise<string>} decrypt
 */
 /** 
  * @method
  * @name encode
  * @param {string} data 
  * @returns {Uint8Array}
 */ 
 /** 
  * @method
  * @name decode
  * @param {AllowSharedBufferSource} byteStream
  * @returns {string}
 */ 
 /** 
  * @method
  * @name encrypt
  * @param {string} data 
  * @param {CryptoKey} key 
  * @returns {{
 *     cipher: ArrayBuffer,
 *     iv: Uint8Array<ArrayBuffer>
 * }}
*/
/** 
 * @method
 * @name decrypt
 * @param {ArrayBuffer} cipher 
 * @param {CryptoKey} key 
 * @param {Uint8Array<ArrayBuffer>} iv 
 * @returns {string}
*/