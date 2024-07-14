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

type eventType = 'lesson' | 'work'

// const events: eventType = 'close' || error because type !== lesson or work


//any

let age: any = 23
age = 12
age = '12'


//unknown

let voice: unknown = "high"
voice = 23
// voice.toString() || Error because "voice" is unknown what type is in it, so we can't change the "voice"
//This suggests that the developer will move on, and when finished, should come back and change the property type
