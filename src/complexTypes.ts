// array - [], object - {}

//arr
const arr: number[] = [2, 3, 4, 5, 6]; //array of numbers (numbers[])
// arr.push('12')  || error bocouse type !== number

const str: string[] = ["a", "b", "c"];
// str.push(1) || error bocouse type !== string

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

type eventType = 'lesson' | 'work'

// const events: eventType = 'close' || error bocouse type !== lesson or work

