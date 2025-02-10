import { grades } from "../../Shared/Config/rules";

export class UserData {
    clicked = $state(0);
    grade = $derived(calcGrade(this.clicked));
    target = $derived(calcTarget(this.grade));
    click = click;
}

export const userData = new UserData;

function click() {
    userData.clicked += 1;
}

function calcGrade(count) {
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

function calcTarget(grade) {
    return ((grade + 1) < grades.length) 
        ? grades[grade + 1] 
        : grades[grades.length - 1];
}