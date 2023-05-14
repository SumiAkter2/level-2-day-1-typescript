// keyof guard:
type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric{
    if (typeof param1 === 'number'&& typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString()+param2.toString()
    }
}
add('1', '1');
add(1, 3)

// in guard:

type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: 'admin';
}
function getUser(user: NormalUser | AdminUser) {
    if ('role' in user) {
        return `I am admin user and my role is ${user.role}`
    } else {
        return 'i am normal user'
    }
}
const user1: NormalUser = { name: 'mr X' };
const adminUser: AdminUser = { name: 'mr B', role: 'admin' }
console.log(
getUser(user1)
);
console.log(
getUser(adminUser)
);

// instance guard: object and class er jnno use hy

class Animal1{
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('Its sounding');
    }
}
class Dog extends Animal1{
    constructor(name: string, species: string) {
        super(name, species);
       
    }
     makeGheu(){
            console.log('gheu gheu');
        }
}
class Cat extends Animal1{
    constructor(name: string, species: string) {
        super(name, species);
       
    }
     makeMeu(){
            console.log('meuuuu meuuu');
        }
}

function isDog(animal: Animal1): animal is Dog {
    return animal instanceof Dog;
}
function isCat(animal: Animal1): animal is Cat{
    return animal instanceof Cat;
}
function getAnimal(animal: Animal1) {
    if (isDog(animal)) {
        animal.makeGheu()
    }
    else if (isCat(animal)) {
        animal.makeMeu()
    } else {
        animal.makeSound
    }
}

const dog = new Dog('kuttu', 'dog');
const cat = new Cat('kitti', 'cat');
getAnimal(dog)