/**
 * @typedef IStore
 * @prop {(key: string, data: string) => Promise<void>} setItem - put to store
 * @prop {(key: string) => Promise<string>} getItem - get from the store
 */

/** 
 * @typedef IValidator
 * @prop {(hashsum: string) => Promise<string>} init - initiated snapshot
 * @prop {(eventData: IEventData, snapshot: string) => Promise<string>} snap - updated snap
 */

/**
 * @typedef ISnapshotParser
 * @prop {(data: string) => ISnapshot} parse
 * @prop {(data: ISnapshot) => string} setup 
 */

/**
 * @typedef IRegister
 * @prop {(IPaymentData) => Promise<string>} payment
 * @prop {(signature: string) => Promise<IGiftData | null>} validate
 */

/**
 * @typedef IPaymentData
 * @prop {string} genesis
 * @prop {string} snapshot
 * @prop {string} from
 * @prop {string} to
 * @prop {number} key 
 */

/**
 * @typedef IGiftData
 * @prop {number} grade
 * @prop {number} count
 * @prop {string} from
 * @prop {string} to
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