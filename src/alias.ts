// alias type:
type CrushType= {
    name: string,
    age?: number,
    profession: string,
    address: string
}



const crush1:CrushType  = {
    name: 'lamiya',
    age: 18,
    profession: 'web developer',
    address: 'lalmatiya'
};

const crush2: CrushType = {
    name: 'kitiya',
    profession: 'nex level developer',
    address:'doniya'
}
// console.log(crush1, crush2);

// for boolean:
type MarriedType = boolean;
const isMarried: MarriedType = false;

// for string:
type NameType = string;
const myName: NameType = 'kitti'

type OperationType = (x: number, y: number) => void;
const calculate = (number1: number, number2: number , operation:OperationType) => {
    console.log( operation(number1,number2))
}
calculate(10, 30, (x, y) => x + y);
calculate(10, 30, (x, y) => x - y);
calculate(10, 30, (x, y) => x / y);
calculate(10, 30, (x, y) => x * y);
