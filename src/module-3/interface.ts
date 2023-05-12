// Interface: use only for object( object,function,and array)


interface IUser{
    name: string,
    age:number,
}
interface ExtendUser extends IUser{
    roll:number,
}
const User: ExtendUser = {
    name: 'sumi',
    age: 300,
    roll:12,
}
// function er jnno interface
// alias type:

type addedType = {
   ( num1:number,num2:number):number
}
const addedNumber: addedType = (num1, num2) => num1 + num2;


//  interface :
interface IAddedType{
     ( num1:number,num2:number):number
}
const addedNumbers: IAddedType = (num1, num2) => num1 + num2;   // but eta reffer kore na cz interface alias tai besi gusano mne hosse...


// array :

type oddNumber = number[];

interface IOddNumber  {
    [index:number]:number,
}
const newNumber: oddNumber = [1, 3, 5];
const INewNumber: IOddNumber = [1, 3, 5];