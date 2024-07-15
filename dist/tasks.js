"use strict";
//task 1
let age = 50;
let neme = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
    return 100 + a;
};
//task 2
let anything = -20;
anything = "Text";
anything = {};
//task 3
let some;
some = "Text";
let str;
str = some;
//task 6
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
//task 7
//Створіть функцію (isWeekend), яка приймає день тижня
//(з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekend(day) {
    if (day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
        console.log(`${day} is weekend`);
        return `${day} is weekend`;
    }
    else {
        console.log(`${day} is workday`);
        return `${day} is workday`;
    }
}
const result = isWeekend(DayOfWeek.Monday);
const result2 = isWeekend(DayOfWeek.Saturday);
console.log(result);
console.log(result2);
let myGender;
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
//task 3
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
