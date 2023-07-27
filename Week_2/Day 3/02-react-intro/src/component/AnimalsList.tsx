import { useState } from "react";

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

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
  { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true },
];

interface AnimalsListProps {
  kind: AnimalKind;
}

const getEmoji = (kind: AnimalKind) => {
  if (kind === "chicken") {
    return "🐔";
  } else if (kind === "cow") {
    return "🐄";
  } else if (kind === "sheep") {
    return "🐑";
  } else if (kind === "pig") {
    return "🐖";
  } else {
    return "Animal";
  }
};

const AnimalList = (props: AnimalsListProps) => {
  const kind = props.kind;
  const emoji = getEmoji(kind);
  const [animals, setAnimals] = useState(animals);

  const feedAnimal = (animalId: number) => {
    const newState = animal.map((animal) => {
      if (animal.id === animalId) {
        const newAnimal = { ...animal };
        newAnimal.hasbeenFed = true;
        return newAnimal;
      } else {
        return animal;
      }
    });
    setAnimals(newState);
  };

  return (
    <ul className="animal-list-container">
      {animals
        .filter((animal) => {
          if (animal.kind === kind) {
            return true;
          } else {
            return false;
          }
        })
        .sort((a, b) => {
          return a.age - b.age;
        })
        .map((animal) => {
          return (
            <li key={animal.id} className="animal-list-item-container">
              <h2>
                {emoji} {animal.name}
              </h2>
              <p>{`I am a ${animal.age} year old ${animal.kind}!`}</p>
              <p>{animal.hasBeenFed ? "I am happy 😌" : "I am hungry 🥺"}</p>
              <button onClick={() => feedAnimal(animal.id)}> Feed</button>;
            </li>
          );
        })}
    </ul>
  );
};

export default AnimalList;
