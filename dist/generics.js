"use strict";
const arrOfNum = [1, 2, 3, 4, 5, 6, 7];
const arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    return arr.reverse();
}
const call1 = reverse(arrOfNum);
const call2 = reverse(arr);
console.log(call1);
console.log(call2);
function agreeByProperty(obj) {
    return obj.address;
}
const results = agreeByProperty({
    putin: "huilo",
    slava: "Ukraini",
    address: "Hello world",
});
console.log(results);
//practice
const student = {
    name: "Jozef",
    age: 21,
};
function getProperty(obj, key) {
    return obj[key];
}
const student1 = getProperty(student, "age");
console.log(student1);
const list = {
    title: 'Learn js',
    description: 'Let`s do it',
    complited: false
};
function todo(todo, fieldsToUpdates) {
    return { ...todo, ...fieldsToUpdates };
}
const callFn = todo(list, {
    description: "Hiting putin by bullets"
});
//without name and page
const euser = {
    address: 'Grove street'
};
