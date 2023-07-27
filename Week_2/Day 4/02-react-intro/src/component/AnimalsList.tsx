import { useState } from "react";

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}

const initialAnimals: Animal[] = [
  {
    id: 1,
    name: "Bessie",
    kind: "cow",
    age: 4,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/h55EUEsTG9224/giphy.webp",
  },
  {
    id: 2,
    name: "Dolly",
    kind: "sheep",
    age: 2,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/oKAwRRzAzbKfe/giphy.webp",
  },
  {
    id: 3,
    name: "Cluck",
    kind: "chicken",
    age: 1,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/1gUn2j2RKcK0yaLKaO/giphy.webp",
  },
  {
    id: 4,
    name: "Porky",
    kind: "pig",
    age: 3,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/LSQjPniAHL31zPrXB0/giphy.webp",
  },
  {
    id: 5,
    name: "Maggie",
    kind: "cow",
    age: 5,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/QAy9UucK9omP7TcbUp/giphy.webp",
  },
  {
    id: 6,
    name: "Bo",
    kind: "sheep",
    age: 1,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/vH73ccwt2a5bi/giphy.webp",
  },
  {
    id: 7,
    name: "Nugget",
    kind: "chicken",
    age: 2,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/1yTgjxf7VFuyblxmDe/giphy.webp",
  },
  {
    id: 8,
    name: "Wilbur",
    kind: "pig",
    age: 2,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/ThCpqjXJw862c/giphy.webp",
  },
  {
    id: 9,
    name: "Bella",
    kind: "cow",
    age: 7,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/eGxZNRietHrgQXKKOg/giphy.webp",
  },
  {
    id: 10,
    name: "Fluffy",
    kind: "sheep",
    age: 3,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/z5u3Hddn4P45O/giphy.webp",
  },
  {
    id: 11,
    name: "Wings",
    kind: "chicken",
    age: 1,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/teNIxdOwyPC3C/giphy.webp",
  },
  {
    id: 12,
    name: "Babe",
    kind: "pig",
    age: 1,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/3zwx8yctzAxuzmUWJ1/giphy.webp",
  },
  {
    id: 13,
    name: "Moo",
    kind: "cow",
    age: 3,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/RYKFEEjtYpxL2/giphy.webp",
  },
  {
    id: 14,
    name: "Fleece",
    kind: "sheep",
    age: 4,
    hasBeenFed: false,
    imgUrl: "https://i.giphy.com/media/krZUvydC7Qrdu/giphy.webp",
  },
  {
    id: 15,
    name: "Feathers",
    kind: "chicken",
    age: 2,
    hasBeenFed: true,
    imgUrl: "https://media.giphy.com/media/emwfDfisjNTB6/giphy.webp",
  },
  {
    id: 16,
    name: "Piglet",
    kind: "pig",
    age: 4,
    hasBeenFed: true,
    imgUrl: "https://i.giphy.com/media/U8Mn2NSL6OR0Y/giphy.webp",
  },
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
  const handleClick = () => {
    window.alert("You have clicked me!");
  };
  const [animals, setAnimals] = useState<Animal[]>(initialAnimals);

  const feedAnimal = (animalId: number) => {
    const newState = animals.map((animal: Animal) => {
      if (animal.id === animalId) {
        const newAnimal = { ...animal };
        newAnimal.hasBeenFed = true;
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
              <img src={animal.imgUrl} alt="Profile Picture" />
              <p>{animal.hasBeenFed ? "I am happy 😌" : "I am hungry 🥺"}</p>
              <button onClick={() => feedAnimal(animal.id)}> Feed</button>;
              <button onClick={handleClick}>Click Me!</button>
            </li>
          );
        })}
    </ul>
  );
};

export default AnimalList;
