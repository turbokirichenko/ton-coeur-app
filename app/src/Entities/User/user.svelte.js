import { grades } from "../../Shared/Config/rules";

export class User {
    __click = $state(0);
    __grade = $derived(this.__calcGrade(this.__click));
    __target = $derived(this.__calcTarget(this.__grade));

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

    click() {
        this.__click++;
    }
}