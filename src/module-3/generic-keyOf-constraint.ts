// keyOf :

type PersonType = {
    name: string,
    age: number,
    job:boolean
}

type newType = 'name' | 'age' | 'job';
const a: newType = 'name';


type newKeyOfType = keyof PersonType;
const b: newKeyOfType = 'job';

function getProperty<X,Y extends keyof X> (obj: X, key: Y ) {
     obj[key]
}
const property= getProperty({name:'sumii',age:44},'name',)