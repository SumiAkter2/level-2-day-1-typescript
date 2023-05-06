
// normal function:
function add(num1: number, num2: number): number  {
    return num1 + num2;
}
add(3, 6);
// default parameter:
//  always default parameter 2nd element a set korte hy 
function addNumber(num3: number , num4: number= 10): void{
    console.log(num3+num4);
}
addNumber(30)
// array function:
const addTwoNumbers = (num5: number, num6: number): void =>console.log(num5 + num6);
addTwoNumbers(5, 9);

// spread operator:
const myFriend = ['lili', 'mimi', 'jiji'];
const newFriend = ['liliya', 'mimiya', 'jijiya'];
newFriend.push(...myFriend)
// console.log(myFriend, newFriend);

// rest parameter:
const greetFriend =(...friends: string[]): void => console.log(friends);
greetFriend('lila', 'mima', 'jija', 'kika');


const goodFriend=(...gFriends:string[]):void=>gFriends.forEach(gFriend => {
    console.log(`My friend ${gFriend}`);
});
goodFriend('liya','miya','lamiya')