
// interface :
interface IVehicle{
    start(): void;
    stop(): void;
    move(): void;

}
// class Vehicles implements IVehicle {
//     constructor(
//         public name: string,
//         public model : number,
//         public brand : string
//     ) {
        
//     }
//     start(): void {
//         console.log('starting');
//     }
//     stop(): void {
//         console.log('stoping');
//     }
//     move(): void {
//         console.log('move');
//     }
//     test() {
//         console.log('test just');
//     }
// }
// abstract class:
abstract class Vehicles  {
    constructor(
        public name: string,
        public model : number,
        public brand : string
    ) {
        
    }
    abstract start(): void;
 abstract   stop(): void  ;
    move(): void {
        console.log('move');
    }
    test() {
        console.log('test just');
    }
}
class Car extends Vehicles{
start(): void {
    console.log('sssssssssss');
    }
    stop(): void {
    console.log('sssssssssss');
}
}

// const vehicle = new Vehicles('car', 2022, 'BMW')
// vehicle.brand;