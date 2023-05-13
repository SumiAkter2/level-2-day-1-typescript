// mocking:
const makePromise = ():Promise<string> => {
  return  new Promise<string>((resolve,reject) => {
        const data:string = 'Have a data';
        if (data) {
            resolve (data);
        } else {
            reject('no data')
        }
    })
}
const getPromise =async () :Promise<void>=> {
    const data = await makePromise();
    console.log(data);
}

// promise in object :
interface DataType{
   data: string
}


const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve,reject) => {
        const data: DataType = { data: 'there Have a data' }
        if (data) {
            resolve(data)
        } else {
            reject('no')
        }
    })
}
const getPromiseObject = async(): Promise<DataType> => {
    const data = await makePromiseObject()
    return data;
}


// fetch data from json place holder:

interface IToDo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const getToDo =async () :Promise<IToDo>=> {
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await response.json();
}
const getToDoData = async (): Promise<void> => {
    const result = await getToDo();
    console.log(result);
}
getToDoData();