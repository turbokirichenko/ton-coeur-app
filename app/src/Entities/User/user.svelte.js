import { grades } from "../../Shared/Config/rules";

export class User {
    /**@type {IStore} */
    __store;
    /**@type {IBlackBox} */
    __blackbox;
    /** @type {IRegister} */
    __register;
    /**@type {string | null} */
    __genesis = $state(null);
    /**@type {string | null} */
    __snapshot = $state(null);
    /**@type {number} */
    __click = $derived(this.__calcCount(this.__snapshot));
    /** @type {number} */
    __grade = $derived(this.__calcGrade(this.__click));
    /** @type {number} */
    __target = $derived(this.__calcTarget(this.__grade));

    /** 
     * 
     * @param {IBlackBox} blackbox 
     * @param {IStore} store
     */
    constructor(blackbox, register, store) {
        this.__store = store;
        this.__blackbox = blackbox;
        this.__register = register;
        this.__init();
    }

    async __init() {
        var genesisStore = await this.__store.getItem('genesis');
        var snapshotStore = await this.__store.getItem('snapshot');
        if (genesisStore && snapshotStore) {
            this.__genesis = sessionStorage.getItem('genesis');
            this.__snapshot = sessionStorage.getItem('snapshot');
        } else {
            const [genesis, snapshot] = await this.__blackbox.genesis();
            this.__genesis = genesis;
            this.__snapshot = snapshot;
            this.__store.setItem('genesis', genesis);
            this.__store.setItem('snapshot', snapshot);
        }
    }

    __calcCount(snapshot) {
        return snapshot ? this.__blackbox.parse(snapshot).nonce : 0;
    }

    __calcGrade(count) {
        var target = 0;
        grades.find((_, index) => {
            if ((!grades[index + 1]) || (count < grades[index + 1])) {
                target = index;
                return true;
            }
            return false;
        })
        return target;
    }

    __calcTarget(grade) {
        return ((grade + 1) < grades.length) 
            ? grades[grade + 1] 
            : grades[grades.length - 1];
    }

    get clicked() {
        return this.__click;
    }

    get grade() {
        return this.__grade;
    }

    get target() {
        return this.__target;
    }

    /** update state
     * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
     */
    async click(event) {
        var snapshot = await this.__blackbox.snapshot({clientX: event.clientX, clientY: event.clientY}, this.__snapshot);
        this.__snapshot = snapshot;
        await sessionStorage.setItem('snapshot', this.__snapshot);
    }

    /** get a gift id
     * 
     * @param {string} from
     * @param {string} to
     * @returns {Promise<string | null>}
     */
    async gift(from, to) {
        try {
            // 1) получить генезисис запись
            const genesis = await this.__store.getItem('genesis');
            const snapshot = await this.__store.getItem('snapshot');
            if (!genesis || !snapshot) {
                await this.__init();
                throw new Error('genesis or snapshot is missing from the store. try again');
            }
            // 2) проверить наличие записи в хранилище
            const parsed = this.__blackbox.parse(snapshot);
            const checkSignature = await this.__store.getItem(parsed.genesis);
            // 3) если запись есть вернуть запись
            if (checkSignature) {
                return checkSignature;
            }
            // 4) если записи нет зарегистрировать запись в регистре
            const data = {
                genesis,
                snapshot,
                from,
                to,
                key: this.__grade
            }
            const signature = await this.__register.payment(data);
            if (!signature) {
                throw new Error('error while created signature');
            }
            // 5) сохранить запись в хранилище
            await this.__store.setItem(parsed.genesis, signature);
            // 6) обновить сессию и сохранить сессию в хранилище
            const [newGenesis, newSnapshot] = await this.__blackbox.genesis();
            this.__genesis = newGenesis;
            this.__snapshot = newSnapshot;
            await this.__store.setItem('genesis', newGenesis);
            await this.__store.setItem('snapshot', newSnapshot);
            return signature;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    /** validate signature of the gift
     * 
     * @param {string} signature 
     * @returns {Promise<IGiftData | null>}
     */
    async validate(signature) {
        try {
            var res = await this.__register.validate(signature);
            return {
                count: isNaN(res.count) ? 0 : res.count,
                grade: isNaN(res.grade) ? 0 : res.grade,
                from: res.from ?? '',
                to: res.to ?? '',
            }
        } catch (err) {
            console.log(err);
            return {
                count: 0,
                grade: 404,
                from: '',
                to: '',
            };
        }
    }
}