class Person{
    takeNap() {
        console.log('8 hour per day');
    }
}
class Student extends Person{
    takeNap():void {
        console.log('10 hour per day');
    } 
}
class Developer extends Person{
    takeNap():void {
        console.log('6 hour per day');
    } 
}

function getNap(param: Person) {
    param.takeNap()
}
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getNap(person1)
getNap(person2)
getNap(person3)


class Shape{
    getArea(): number {
        return 0; 
    }
}
class Circle extends Shape{
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius; 
    }
}
class Rectangle  extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number) {
         super()
        this.height = height;
        this.width = width;
       
    }
    getArea(): number {
        return (this.height * this.width);
    }
}

function getShapeArea(param: Shape) {
    console.log(param.getArea());
}
const circle = new Circle(10);
const rectangle1 = new Rectangle(10, 20);
getShapeArea(circle);
getShapeArea(rectangle1);
