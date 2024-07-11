let total: number = 5;
let name: string = "Gay";
let isActive: boolean = true;

name = "1";

const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Bob",
  age: 12,
};

// error user.age = '12'
// error user.name = 12