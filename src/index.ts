
// type Goods = {
//   [key: string]: number | string;
// };

// const fruits: Goods = {
//   apples: 1,
//   orange: 2,
//   banana: 7,
// };

// const vegetables: Goods = {
//   onion: 2,
//   cucumber: 32,
//   potato: "42",
// };

/////generics
///////////////////////////////////////////////////////////
// function indefy<string>(arg: string): string {        //
//   return arg;                                         //
// }                                                     //
function identity<T>(arg: T): T {                        //
  return arg;                                            //
}                                                        //
                                                         //
let output1 = identity<string>('srting')                 //
let output2 = identity<number>(1)                        //
///////////////////////////////////////////////////////////

function reverse<T>(items:T[]):T[] {
    return items.reverse()
}

let option1 = reverse<number>([1,2,3,4,5,6,7])
let option2 = reverse<string>(['g','f','e','d','c','b','a'])

// console.log(option1);
// console.log(option2);


function lengthOfObject<T extends {duration: number}>(obj:T):number {
    return obj.duration
}

lengthOfObject({
    name:"bob",
    duration: 12
})
////////////////////////////////////
const students ={
    name: "Bob",
    age:22,
}

function getProperty<ObjectType, KeyType extends keyof ObjectType>(obj:ObjectType, key: KeyType) {
    return obj[key]
}

let studentName = getProperty(students, "name")
// let addressName = getProperty(students, "address")
console.log(studentName);
// console.log(addressName);

