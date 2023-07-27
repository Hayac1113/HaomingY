import { useState } from "react";

// const MyButton = () => {
//   let count = 0;

//   function handleClick() {
//     alert("You clicked me!");
//     // Increase count by 1
//     count += 1;
//   }

//   return (
//     <div>
//       <p>clicked {count} times!</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default MyButton;

// const Counter = () => {
//   const [countObject, setCountObject] = useState({ count: 0 });

//   const handleIncrease = () => {
//     const newCountObject = {
//       count: countObject.count + 1,
//     };
//     setCountObject(newCountObject);
//   };

//   const handleDecrease = () => {
//     const newCountObject = {
//       count: countObject.count - 1,
//     };
//     setCountObject(newCountObject);
//   };
//   return (
//     <div>
//       <p>The current count is {countObject.count}</p>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>
//     </div>
//   );
// };

// export default Counter;

const [countries, setCountry] = useState([
  { id: 1, name: "Austria", inhabitants: 8956000 },
  { id: 2, name: "Belgium", inhabitants: 11590000 },
  { id: 3, name: "Canada", inhabitants: 38250000 },
]);

const increaseInhabitants = (countryNameToUpdate: string) => {
  const newState = data.map((country) => {
    if (country.name === countryNameToUpdate) {
      // 👇️ if id equals our country id, update country property
      const newCountryObject = {
        ...country,
        inhabitants: country.inhabitants + 1,
      };
    } else {
      // 👇️ otherwise we return the country as it is
      return country;
    }
  });

  setData(newState);
};

<button onClick={() => increaseInhabitants("Austria")}>
  Someone was born in Austria!
</button>;

export default increaseInhabitants;
