// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

class Worker {
    static type = 'Worker'
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() {
        return this.rate * this.days
    }

    get getFullName() {
        return this.name + ' ' + this.surname
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log('===========================================================')

// Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers
    }

    getSalary() {
        let temp = super.getSalary()
        return temp * this.workers
    }

}

const boss = new Boss('Иван', 'Иванов', 10, 31, 10);
console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10
