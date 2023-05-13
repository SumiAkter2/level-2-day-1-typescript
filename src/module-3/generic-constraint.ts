interface MandatoryType{
name:string,roll:number,job:boolean
}

type MyInfoType = {
    name: string,
    roll: number,
    job: boolean,
    other1: string,
    other2:null
}
const myInfo2 = {
    name: 'sumi',
    roll: 1,
    job:false,
    other1: 'rahsed',
    other2:undefined,
}
const addMeInMyCrushMind2 = <T extends MandatoryType>(myInfo2: T) => {
    const crush2 = 'rashed';
    const newData2 = { ...myInfo2, crush2 };
    return newData2;
}
const result3 = addMeInMyCrushMind2(myInfo2);
