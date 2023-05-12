// ternary operator:

const age: number = 12;

// if (age >= 18) {
//     console.log('yes');
// } else {
//     console.log('no')
// }
const isAdult = age >= 18 ? 'yes' : 'no'
// console.log(isAdult);

// nullish coalescing operator:
// null & undefined
// const isAuthenticatedUser = null;
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'guest'
const userName2 = isAuthenticatedUser? isAuthenticatedUser : 'guest'
// console.log({ userName }, { userName2 });

type Manus = {
    name: string;
    age: number;
    address: {
        city: 'no city';
        road: 'no road';
        home?:''
    }
}
const manus1: Manus = {
    name: 'kiii',
    age: 3,
    address: {
        city: 'no city',
        road: 'no road',
    }
    
}
const home = manus1?.address?.home ?? 'No home';
console.log(home);