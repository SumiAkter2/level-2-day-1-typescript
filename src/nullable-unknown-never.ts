const searchThing = (value: string | null) => {
    if (value === null) {
        console.log('nothing to search');
    }
    else {
        console.log('searching ...');
        }
}
searchThing(null)

const getMySpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`${convertedSpeed} ms^-1`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ')
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`${convertedSpeed} ms^-1`);
    }
    else {
        console.log('this is boolean');
    }
}
getMySpeed(10);
getMySpeed('10 kmh^-1')
getMySpeed(true)


// never = kkno kno kisu retrun korbena:
function throwError(message: string) {
     throw new Error(message);
     
}
 throwError('error dise')