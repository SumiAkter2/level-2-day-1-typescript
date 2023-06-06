// import {added as addedTwo,divided,multiply} from './module';
import * as Methods from './module'
const added = (param1: number, param2: number) => {
    return param1 + param2;
}
const res = Methods.added(2, 4);