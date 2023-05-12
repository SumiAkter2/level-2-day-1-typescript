
// generic type:
const rollNumbers: Array<number> = [1, 3, 5];
const rollNumber2: Array<string> = ['1', '3', '5'];

const userNameAndRollNumber: Array<{ name: string, roll: number }> = [
    { name: 'sumi', roll: 9 },
    { name: 'rushed', roll: 1 }
]


type GenericType<T> = Array<T>;
const rollNumber3: GenericType<number> = [3, 5, 7];
const userNameAndRollNumber2: GenericType<{ name: string, roll: number }> = [{ name: 'sumi', roll: 9 }, { name: 'rushed', roll: 1 }]

// generic tuple:
type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, number> = ['sumi', 09]
const relationWithJob: GenericTuple<{name:string,job:string}, string> = [{
    name:'suumi',job:'nai'
},'lagbe']