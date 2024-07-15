//task 1
let age: number = 50;
let neme: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

//task 2
let anything: any = -20;
anything = "Text";
anything = {};

//task 3
let some: unknown;
some = "Text";
let str: string;
str = some as string;

//task 4
// type Person = [string, number];
// let person: Person = ["Max", 21];

//task 5
type Sth = number | string;

//task 6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): Error {
  throw new Error("Error");
}

//task 7
//Створіть функцію (isWeekend), яка приймає день тижня
//(з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: DayOfWeek): string {
  if (day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
    console.log(`${day} is weekend`);
    return `${day} is weekend`;
  } else {
    console.log(`${day} is workday`);
    return `${day} is workday`;
  }
}

const result = isWeekend(DayOfWeek.Monday);
const result2 = isWeekend(DayOfWeek.Saturday);

console.log(result);
console.log(result2);

//task 8
type Gender = "male" | "female";
let myGender: Gender;

//task 9
type UniversalType = {
    title: string,
    likes: number,
    accounts:string[],
    status: string,
    details?:{
        createAt:Date,
        updateAt: Date
    }
}

const page1:UniversalType = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2:UniversalType = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }