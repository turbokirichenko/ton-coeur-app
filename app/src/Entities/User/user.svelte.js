import { grades } from "../../Shared/Config/rules";

export class User {
    /**@type {IStore} */
    __store;
    /**@type {IBlackBox} */
    __blackbox;
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
    constructor(blackbox, store) {
        this.__store = store;
        this.__blackbox = blackbox;
        this.__init();
    }

    async __init() {
        var genesis = await this.__store.getItem('genesis');
        var snapshot = await this.__store.getItem('snapshot');
        if (genesis && snapshot) {
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

    /**
     * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
     */
    async click(event) {
        var snapshot = await this.__blackbox.snapshot({clientX: event.clientX, clientY: event.clientY}, this.__snapshot);
        this.__snapshot = snapshot;
        await sessionStorage.setItem('snapshot', this.__snapshot);
    }
}