"use strict";
// array - [], object - {}
//arr
const arr = [2, 3, 4, 5, 6]; //array of numbers (numbers[])
// arr.push('12')  || error because type !== number
const str = ["a", "b", "c"];
// str.push(1) || error because type !== string
//obj
//long form type of obj ↓↓↓↓↓
const user1 = {
    name: "Yoyo",
    age: 12,
};
const user = {
    name: "Yoyo",
    age: 12,
};
// const events: eventType = 'close' || error because type !== lesson or work
//any
let age = 23;
age = 12;
age = "12";
//unknown
let voice = "high";
voice = 23;
// voice.toString() || Error because "voice" is unknown what type is in it, so we can't change the "voice"
//This suggests that the developer will move on, and when finished, should come back and change the property type
//enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Moderator"] = "moderator";
    UserRole["User"] = "user";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
function checkUserRole(role) {
    switch (role) {
        case UserRole.Admin:
            console.log("You are an admin");
            break;
        case UserRole.Moderator:
            console.log("You are an Moderator");
            break;
        case UserRole.User:
            console.log("You are an User");
            break;
        case UserRole.Guest:
            console.log("You are an Guest");
            break;
        default:
            console.log("Unknown role");
            break;
    }
}
const call = checkUserRole(UserRole.Admin);
console.log(call);
