/**
 * @typedef ICryptoProvider
 * @prop {(size: number) => Uint8Array<ArrayBuffer>} randomBytes
 * @prop {(buffer: ArrayBuffer | Uint8Array<ArrayBuffer>) => string} pack
 * @prop {(packed: string) => ArrayBuffer} unpack
 * @prop {(data: Uint8Array<ArrayBuffer>) => Promise<ArrayBuffer>} digest
 */

/** 
 * @typedef IValidator
 * @prop {(hashsum: string) => Promise<string>} init - initiated snapshot
 * @prop {(eventData: IEventData, snapshot: string) => Promise<string>} snap - updated snap
 * @prop {(data: string) => ISnapshot} parse
 * @prop {(data: ISnapshot) => string} setup
 * 
 */

/**
 * @typedef IEventData
 * @prop {number} clientX
 * @prop {number} clientY
 */

/**
 * @typedef ISnapshot
 * @prop {string} genesis - session string
 * @prop {IEventData} eventData - data of tap
 * @prop {number} timestamp - current timestamp
 * @prop {number} nonce - order of snapshot
 */

/** 
 * @typedef IBlackBox
 * @prop {(event: IEventData, snapshot: string) => Promise<string>} snapshot - create a snapshot if the state
 * @prop {() => Promise<[string, string]>} genesis - create payment
 * @prop {(data: string) => ISnapshot} parse
 * @prop {(data: ISnapshot) => string} setup
 */

/**
 * @typedef ISignatureParams
 * @prop {string} hash
 * @prop {string} signature
 */