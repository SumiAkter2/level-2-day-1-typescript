const arrayOfNumbers = [1, 2, 4, 6];
const arrayOfString = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfString);


type AreaString = {
    height: string;
    width: string;
}
type volume = {
    height: number;
    width: number;
    depth: string;
}
type ReadOnlyArea = {
   readonly height: number;
   readonly width: number;
}
const rectangle: ReadOnlyArea = {
    height: 30,
    width: 40,
}

type A = volume['height']  // look up type
type a = keyof volume; // height | width

// index type:
type area = {
    [key in keyof volume]:volume[key]
}
type Area<T> = {
   readonly [key in keyof T]:T[key]
}
const area2: Area<{ height: number }> = { height: 44 } 
type Data = { num1: number }



type B = {

  [key in keyof Data]: string;

}

const numbers:B = {

  num1: '20'

}


// pari nai:
function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
  const item = arr[index];
  return item[key];
}
const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'))




