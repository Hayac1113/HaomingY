interface Person {
  id: number;
  name: string;
  age: number;
}
 
type AnimalKind = "cow" | "sheep" | "chicken" | "pig";
 
interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}
 
interface Farm {
  id: number;
  name: string;
  farmer: number; // a single id, pointing to a Person
  animals: number[]; // an array of ids, pointing to Animals
}

const people: Person[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mark", age: 50 },
  { id: 6, name: "Julia", age: 27 }
];
 
const animals: Animal[] = [
  { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
  { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
  { id: 3, name: "Cluck", kind: "chicken", age: 1, hasBeenFed: true },
  { id: 4, name: "Porky", kind: "pig", age: 3, hasBeenFed: false },
  { id: 5, name: "Maggie", kind: "cow", age: 5, hasBeenFed: true },
  { id: 6, name: "Bo", kind: "sheep", age: 1, hasBeenFed: false },
  { id: 7, name: "Nugget", kind: "chicken", age: 2, hasBeenFed: false },
  { id: 8, name: "Wilbur", kind: "pig", age: 2, hasBeenFed: true },
  { id: 9, name: "Bella", kind: "cow", age: 7, hasBeenFed: true },
  { id: 10, name: "Fluffy", kind: "sheep", age: 3, hasBeenFed: true },
  { id: 11, name: "Wings", kind: "chicken", age: 1, hasBeenFed: false },
  { id: 12, name: "Babe", kind: "pig", age: 1, hasBeenFed: true },
  { id: 13, name: "Moo", kind: "cow", age: 3, hasBeenFed: false },
  { id: 14, name: "Fleece", kind: "sheep", age: 4, hasBeenFed: false },
  { id: 15, name: "Feathers", kind: "chicken", age: 2, hasBeenFed: true },
  { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true }
];
 
const farms: Farm[] = [
  {
    id: 1,
    name: "Old McDonald's Farm",
    farmer: 1, // John
    animals: [1, 2, 3, 4, 9, 10]
  },
  {
    id: 2,
    name: "Green Acres Farm",
    farmer: 2, // Mary
    animals: [5, 6, 7, 8, 12, 14]
  },
  {
    id: 3,
    name: "Happy Farm",
    farmer: 3, // Bob
    animals: [11, 13]
  },
  {
    id: 4,
    name: "Julia's Farm",
    farmer: 6, // Julia,
    animals: [15, 16]
  }
];

const findBob = (people: Person[]): Person | undefined => {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === "Bob") {
            return people[i];
        }
    }
    return undefined;
};

// // console.log(findBob) log alleen de functie. Om de waarde te loggen, moet de waarde die de functie terug krijgt vermeld worden.
// // En daarom console.log(findBob(people)); De waarde van de people is hiermee ook opgenomen.
// console.log(findBob(people));

// const findAge = (people: Person[]): Person | undefined => {
//     for (let i=0; i < people.length; i++) {
//         if (people[i].age === 39) {
//             return people [i];
//         }
//     }
//     return undefined;
// }

// console.log(findAge(people));

// const animalOlderThan2Fed = (animals: Animal[]): Animal | undefined => {
//     for (let i=0; i < animals.length; i++) {
//         if (animals[i].age > 2 && animals[i].hasBeenFed === false) {
//             return animals[i];
//         }
//     }
//     return undefined;
// ;}

// console.log(animalOlderThan2Fed(animals));

// const findGeneric = (
//     inpArray: any[] // the array we want to search in, this is always different depending on what we are searching
//   ): any | undefined => {
//     // return either a result or undefined, always the same
//     for (let i = 0; i < inpArray.length; i++) {
//       // loop over the index array, always the same
//       if (condition) {
//         // the condition here is always different since it depends on the search
//         return inpArray[i]; // if the condition is true, return the object , always the same
//       }
//     }
//     return undefined; // if we didn't find anything return undefined, always the same
//   };

//   const isNamedBob = (p: Person): boolean => p.name === "Bob";

//     const maybeBob = people.find(isNamedBob); // Here we pass a function as an argument to another function!
//     console.log(maybeBob);
//     // { id: 3, name: 'Bob', age: 40 }

//     const is39YearsOld = (p: Person): boolean => p.age === 39;
//     const maybe39 = people.find(is39YearsOld); // Here we pass a function as an argument to another function!
//     console.log(maybe39);
//     // Undefined, nobody is 39 years old in the `people` array

// const maybeId4 = (farms: Farm): boolean => farms.id === 4;
// const isId4 = farms.find(maybeId4);
// console.log(isId4);

// const newMaybeId4 = farms.find((farms: Farm): boolean => farms.id === 4);
// console.log(newMaybeId4);

// const isPig = (animals: Animal): boolean => animals.kind === "pig";
// const itIsAPig = animals.find(isPig);
// console.log(itIsAPig);

// const newIsPig = animals.find((animals: Animal): boolean => animals.kind === "pig");
// console.log(newIsPig);

// const isThereFarmsWith6 = (farms: Farm): boolean => farms.animals.length === 6;
// const farmWith6 = farms.find(isThereFarmsWith6);
// console.log(farmWith6);

// const newFarmWith6 = farms.find((farms: Farm): boolean => farms.animals.length === 6);
// console.log(newFarmWith6);

// const animal2NoFed = animals.find((animals: Animal): boolean => animals.age < 2 && animals.hasBeenFed === false);
// console.log(animal2NoFed);

// // Bij Finding en Filtering function hoeft de boolean type niet vermeld te worden, want ze geven de waarde atijd als boolean terug.

// // Exercise Filters function:

// // Which animals in `animals` are sheep?
// const allSheep = animals.filter((a: Animal) => a.kind === "sheep");
// console.log(allSheep);

// //Mijn antwoord:
// const sheep = (animals: Animal) => animals.kind === "sheep";

// console.log(animals.filter(sheep));
 
// // Which farms in `farms have less than 3 animals?
// const smallFarms = farms.filter((f: Farm) => f.animals.length < 3);
// console.log(smallFarms);

// //Mijn antwoord:
// const farmsLessThan3 = (farms: Farm) => farms.animals.length < 3;
// console.log(farms.filter(farmsLessThan3));
 
// // Which animals in `animals` have a name shorter then 4 characters?
// const animalsWithShortNames = animals.filter((a: Animal) => a.name.length < 4);
// console.log(animalsWithShortNames);

// //Mijn antwoord:
// const animalLessThan4 = (animals: Animal) => animals.name.length < 4;
// console.log(animals.filter(animalLessThan4));

// // Show the name of every person in `people`
// const personNames = people.map((p: Person) => p.name);
// console.log(personNames);
// // [ 'John', 'Mary', 'Bob', 'Alice', 'Mark', 'Julia' ]

// //Mijn antwoord:
// const peopleName = people.map((people: Person) => people.name);
// console.log(peopleName);

// // For every animal in `animals` create a string that tells their age. So for the first animal it should be `"Bessie is 4 years old"`
// const animalAges = animals.map(
//   ({ name, age }: Animal) => `${name} is ${age} years old`
// );
// console.log(animalAges);
// // [
// //   'Bessie is 4 years old',
// //   'Dolly is 2 years old',
// //   'Cluck is 1 year old',
// //   'Porky is 3 years old',
// //   'Maggie is 5 years old',
// //   'Bo is 1 year old',
// //   'Nugget is 2 years old',
// //   'Wilbur is 2 years old',
// //   'Bella is 7 years old',
// //   'Fluffy is 3 years old',
// //   'Wings is 1 year old',
// //   'Babe is 1 year old',
// //   'Moo is 3 years old',
// //   'Fleece is 4 years old',
// //   'Feathers is 2 years old',
// //   'Piglet is 4 years old'
// // ]
 
// //Mijn antwoord:
// const animalAge = animals.map(
//     ({name, age}: Animal) => `${name} is ${age} years old`);

// console.log(animalAge)

// // Show the length of every farm name in `farms
// const farmNameLength = farms.map((f: Farm) => f.name.length);
// console.log(farmNameLength);
// // [ 19, 16, 10, 12 ]

// //Mijn antwoord:
// const farmName = farms.map((farms: Farm) => farms.name.length);
// console.log(farmName);


