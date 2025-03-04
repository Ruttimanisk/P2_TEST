"use strict";
class employee {
    constructor(name, weekly_hours, role) {
        this.name = name;
        this.weekly_hours = weekly_hours;
        this.role = role;
    }
    format() {
        return `${this.name} - ${this.weekly_hours} hours/week - role: ${this.role}`;
    }
}
const EmpMads = new employee('Mads', 40, 'dev');
console.log(EmpMads.format());
console.log(EmpMads);
console.log(EmpMads.name);
