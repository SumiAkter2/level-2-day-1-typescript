let emni: any;
emni = 'next level er bojhabujhi';
// (emni as string).length;
<string>emni.length;


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return value;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const ToBeNumber = kgToGram(10 ) as number;
const ToBeString = <string>kgToGram('10') ;

type CustomErrorType = {
    message:string
}
try {
    
} catch (err) {
    console.log((<CustomErrorType>err).message);
}