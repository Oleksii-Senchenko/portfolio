// type User = {
//     name: string;
//     age: number;
//   };

// let total: number = 5;
// let name: string = "Gay";
// let isActive: boolean = true;

// name = "1";

// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
// };

// error user.age = '12'
// error user.name = 12

// type eventType = 'lesson' | 'deadline'

// const event: eventType = 'deadline'
// const event: eventType = 'homeWork'

////////////////Second lesson/////////////////////
//type any//

// let age: any = 10
// age = false

//type unkown

// let name: unknown = 'Bob'

// name = 12

//////////////////////////////////////////////////////////
// type vs enum//

// We have two options for write "conusructor" like types

//Firest example with usual "type"

// type size = "small" | "medium" | "large";
// If i want to take some property i should do like this =>

// let button: size = "small"; //✅
//let button2: size = 'big' //❌ Becouse we are not described it in types wich we can see above

// Second example with enum

//First of all it is an object. Due to it we can take some VALUE by name of property

enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

// let button: Sizes = Sizes.small;
// let button2: Sizes = Sizes.big;❌ Becouse the Object does`t includ PROPERTY like "big"
 


