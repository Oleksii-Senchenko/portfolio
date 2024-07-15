"use strict";
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
/////GENERICS AND THEIR ABILITIES
///////////////////////////////////////////////////////////
// function indefy<string>(arg: string): string {        //
//   return arg;                                         //
// }                                                     //
function identity(arg) {
    //
    return arg; //
} //
//
let output1 = identity("srting"); //
let output2 = identity(1); //
//
///////////////////////////////////////////////////////////
function reverse(items) {
    return items.reverse();
}
let option1 = reverse([1, 2, 3, 4, 5, 6, 7]);
let option2 = reverse(["g", "f", "e", "d", "c", "b", "a"]);
// console.log(option1);
// console.log(option2);
function lengthOfObject(obj) {
    return obj.duration;
}
lengthOfObject({
    name: "bob",
    duration: 12,
});
////////////////////////////////////
// Here we check if any key belongs to an object element
const students = {
    name: "Bob",
    age: 22,
};
function getProperty(obj, key) {
    return obj[key];
}
const info = getProperty(students, "age");
console.log(info);
const todo1 = {
    title: "Learn TS",
    description: "Stydy basick ts",
    complited: false,
};
function updateField(todo, fieldToUpdate) {
    return { ...todo, ...fieldToUpdate };
}
const todo2 = updateField(todo1, { complited: true });
console.log(todo2);
////////read only Readonly
// type User = {
//   name: string;
//   age: number;
// };
// const jhon: Readonly<User> = {
//   name: "Bober",
//   age: 12,
// };
//user.age = 12 ()=> error becouse we used property "Readonly"
const arrOfNum = [1, 2, 3, 4, 5, 6, 7];
const julianSummery = {
    name: "bob",
    age: 12,
    // address: "Lavanda" It does not work becouse wo took all types without address in //=>"type PromisWithOutAddress"<=\\
    //IT`S OMIT
};
//Task 1\\
