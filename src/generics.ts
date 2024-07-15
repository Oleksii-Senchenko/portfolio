const arrOfNum = [1, 2, 3, 4, 5, 6, 7];
const arr = ["a", "b", "c", "d", "e"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const call1 = reverse<number>(arrOfNum);
const call2 = reverse<string>(arr);
console.log(call1);
console.log(call2);

function agreeByProperty<T extends { address: string }>(obj: T): string {
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


function getProperty<ObjectType, KeyType extends keyof ObjectType>(obj:ObjectType, key:KeyType):ObjectType[KeyType] {
    return obj[key]
}

const student1 = getProperty(student, "age")
console.log(student1);

//partial

type Todo = {
    title:string,
    description: string,
    complited: boolean
}


const list = {
    title:'Learn js',
    description: 'Let`s do it',
    complited: false
}


function todo(todo:Todo, fieldsToUpdates: Partial<Todo>):Todo {
    return {...todo, ...fieldsToUpdates}
}

const callFn = todo(list, {
    description: "Hiting putin by bullets"
})


//pick
// type Person ={
//     name: string,
//     age: number,
//     address: string
// }

// type MainOfPerson = Pick<Person, "name"| 'age'>
//only name and age

// const euser:MainOfPerson = {
//     name: "Bom",
//     age: 12
// }

//omit
type Person ={
    name: string,
    age: number,
    address: string
}

type MainOfPerson = Omit<Person, "name"| 'age'>
//without name and page


const euser:MainOfPerson = {
  address: 'Grove street'
}

//record

// type Goods = {
//     [key: string]: number;
//   };

// they're  same

 type CityDataBase = Record<string, number>

const fruitss: CityDataBase = {
    avacado: 32,
    bananas: 15,
    blubery: 123,
  };
  