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
function identity<T>(arg: T): T {
  //
  return arg; //
} //
//
let output1 = identity<string>("srting"); //
let output2 = identity<number>(1); //
//
///////////////////////////////////////////////////////////

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

let option1 = reverse<number>([1, 2, 3, 4, 5, 6, 7]);
let option2 = reverse<string>(["g", "f", "e", "d", "c", "b", "a"]);

// console.log(option1);
// console.log(option2);

function lengthOfObject<T extends { duration: number }>(obj: T): number {
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

function getProperty<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
) {
  return obj[key];
}

const info = getProperty(students, "age");
console.log(info);
///////////////////////////////////////

// If we want to change the value of any object key, we must use "Partial"

type Todo = {
  title: string;
  description: string;
  complited: boolean;
};

const todo1: Todo = {
  title: "Learn TS",
  description: "Stydy basick ts",
  complited: false,
};

function updateField(todo: Todo, fieldToUpdate: Partial<Todo>): Todo {
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

const arrOfNum: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7];

// arrOfNum[0] = 1 Error becouse we used property "Readonly"
// arrOfNum.push(6)

//////////pick

type Person = {
  age: number;
  name: string;
  address: string;
};

type PersonSummery = Pick<Person, "name" | "age">;

const bobSummery: PersonSummery = {
  name: "bob",
  age: 12,
  // address: "Lavanda" It does not work becouse wo took only name and age in //=>"type PersonSummery"<=\\

  //IT`S PICK
};

type Perso1 = {
  age: number;
  name: string;
  address: string;
};

type PromisWithOutAddress = Omit<Perso1, "address">;

const julianSummery: PromisWithOutAddress = {
  name: "bob",
  age: 12,
  // address: "Lavanda" It does not work becouse wo took all types without address in //=>"type PromisWithOutAddress"<=\\
  //IT`S OMIT
};


//Task 1\\