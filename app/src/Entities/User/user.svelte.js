import { grades } from "../../Shared/Config/rules";

export class User {
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
     */
    constructor(blackbox) {
        this.__blackbox = blackbox;
        this.__blackbox.genesis().then((result) => {
            const [genesis, snapshot] = result
            this.__genesis = genesis;
            this.__snapshot = snapshot;
            sessionStorage.setItem('genesis', this.__genesis);
            sessionStorage.setItem('snapshot', this.__snapshot);
        });
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
        this.__snapshot = await this.__blackbox.snapshot({clientX: event.clientX, clientY: event.clientY}, this.__snapshot);
        sessionStorage.setItem('snapshot', this.__snapshot);
    }
}