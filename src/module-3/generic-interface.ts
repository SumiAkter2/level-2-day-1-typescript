// generic interface:

interface CrushInterface<T,U=null>{
    name: string,
    husband: T,
    wife?:U,
}
interface CrushInterface<T,U>{
    name: string,
    husband: T,
    wife?:U,
}
// U=null dile T er por kisui dite hbe na ba dileo hbe...
const myCrush: CrushInterface <boolean,undefined>= {
    name: 'rashed',
    husband:true,
}
// U=null dile na T er por null  ba undefined dite hbe na...
const myCrush2: CrushInterface <string,null>= {
    name: 'rashed',
    husband:'true',
}