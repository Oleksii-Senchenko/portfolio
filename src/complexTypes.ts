// array - [], object - {}

//arr
const arr: number[] = [2, 3, 4, 5, 6]; //array of numbers (numbers[])
// arr.push('12')  || error because type !== number

const str: string[] = ["a", "b", "c"];
// str.push(1) || error because type !== string

//obj

//long form type of obj ↓↓↓↓↓

const user1: { name: string; age: number } = {
  name: "Yoyo",
  age: 12,
};

//short form type of obj ↓↓↓↓↓

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Yoyo",
  age: 12,
};

//custom-made-type

type eventType = "lesson" | "work";

// const events: eventType = 'close' || error because type !== lesson or work

//any

let age: any = 23;
age = 12;
age = "12";

//unknown

let voice: unknown = "high";
voice = 23;
// voice.toString() || Error because "voice" is unknown what type is in it, so we can't change the "voice"
//This suggests that the developer will move on, and when finished, should come back and change the property type

//enum
enum UserRole {
  Admin = "admin",
  Moderator = "moderator",
  User = "user",
  Guest = "guest",
}

function checkUserRole(role: UserRole): void {
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

//functions

// type Userr = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello, ${user.name}`);
// }

type Userr = {
  name: string;
  age: number;
  hobby: string;
};

function userConstructor(name: string, age: number, hobby: string): Userr {
  return {
    name,
    age,
    hobby,
  };
}

type Car = {
  color: string;
  price: number;
  currency: string;
  start: (color: string) => void;
};

const Car: Car = {
  color: "red",
  price: 111,
  currency: "UAH",
  start: (color) => {
    console.log("Hello" + color);
  },
};

// optional params in type

type optionalType = {
  name: string;
  age: number;
  role?: string;
};

const uuser: optionalType = {
  name: "Sank",
  age: 12,
};

const admin: optionalType = {
  name: "Sank",
  age: 12,
  role: "Admin",
};
