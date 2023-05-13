// a type is depend on another type:

// type a1 = string;
// type a2 = a1 extends string ? string : null;

// nested conditional type:
type a1 = null;
type a3 = undefined;
type a4 = number;

type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null:never

type Sheikh = {
    wife1: string;
    wife2: string;
}

type CheckProperty<T,K>= K extends keyof  Sheikh ? true : false
type CheckWife1 = CheckProperty<Sheikh, 'wife2'>


type friend = 'rashed' | 'masuma' | 'bipasha'
type RemoveFriend<T,K> = T extends K ? never : T;
type CurrentFriend=RemoveFriend<friend, 'bipasha'>