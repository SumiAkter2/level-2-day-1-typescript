// generic function:
// arrow function:
const createArray=(params: string): string[]=>{
    return [params];
}
const CreateGenericFunction = <T>(params: T):T[] => {
    return[params]
}
const result1 = CreateGenericFunction<string>('sumi');

// generic type in spreed operator:
const crush = 'Md. Rasheduzzaman';
const myInfo =
{
    name: 'sumi akter',
    add:'kolakopa'
}
const newData = { ...myInfo, crush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = 'Md. Rasheduzzaman';
    const newData={...myInfo,crush}
    return newData
}
const result2=addMeInMyCrushMind(myInfo)
