
class Parent{
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hour: number): string{
        return `This ${this.name} was sleeping from ${hour}`;
}
}
class student extends Parent{
    constructor(name: string, age: number, address: string) {
    super(name,age,address)
    }
}
const student1 = new student('mx', 34, 'fffffffffff')
console.log(student1);

class teacher extends Parent{
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
       super(name,age,address)
        this.designation = designation;
    }

    makeClass(numOfClass: number): string {
        return `This ${this.name} was sleeping from ${numOfClass}`
    }
}
const teacher1 = new teacher('mx', 34, 'fffffffffff','professor')
