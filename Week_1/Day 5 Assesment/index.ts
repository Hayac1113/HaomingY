// Feature 1 - Typing the sandwiches
// Here is an array containing some objects representing sandwiches. Copy and paste this array inside your index.ts file.

interface Sandwich {
    name: string,
    ingredients: string[],
    caloricCount: number,
    vegetarian: boolean,
    spiceLevel: "Mild" | "Medium" | "Spicy"
}

const menu: Sandwich[] = [
    {
      name: "Classic BLT",
      ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise"],
      caloricCount: 450,
      vegetarian: false,
      spiceLevel: "Mild"
    },
    {
      name: "Veggie Delight",
      ingredients: ["Cucumber", "Avocado", "Spinach", "Hummus"],
      caloricCount: 320,
      vegetarian: true,
      spiceLevel: "Mild"
    },
    {
      name: "Spicy Chicken",
      ingredients: [
        "Grilled Chicken",
        "Pepper Jack Cheese",
        "Lettuce",
        "Spicy Sauce"
      ],
      caloricCount: 550,
      vegetarian: false,
      spiceLevel: "Spicy"
    },
    {
      name: "Turkey Club",
      ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise"],
      caloricCount: 480,
      vegetarian: false,
      spiceLevel: "Mild"
    },
    {
      name: "Caprese",
      ingredients: ["Cheese", "Tomato", "Basil", "Dressing"],
      caloricCount: 320,
      vegetarian: true,
      spiceLevel: "Mild"
    },
    {
      name: "Roast Beef",
      ingredients: ["Beef", "Cheese", "Onions"],
      caloricCount: 520,
      vegetarian: false,
      spiceLevel: "Medium"
    },
    {
      name: "Chicken Caesar Wrap",
      ingredients: ["Chicken", "Lettuce", "Cheese", "Dressing", "Croutons"],
      caloricCount: 380,
      vegetarian: false,
      spiceLevel: "Mild"
    },
    {
      name: "Egg Salad",
      ingredients: ["Eggs", "Mayonnaise", "Celery", "Mustard"],
      caloricCount: 300,
      vegetarian: true,
      spiceLevel: "Mild"
    },
    {
      name: "Tuna Melt",
      ingredients: ["Tuna", "Cheese", "Tomato"],
      caloricCount: 480,
      vegetarian: false,
      spiceLevel: "Mild"
    },
    {
      name: "Ham and Cheese",
      ingredients: ["Ham", "Cheese"],
      caloricCount: 420,
      vegetarian: false,
      spiceLevel: "Mild"
    }
  ];

  //Bonus Feature 1
  //1. Checks all objects
  //2. find longest property 

  let biggestSandwich = menu[0];

for (let i = 0; i < menu.length; i++) {
  const sandwich = menu[i];
  if (sandwich.ingredients.length > biggestSandwich.ingredients.length) {
    biggestSandwich = sandwich;
  }
}
console.log(`The biggest sandwich is ${biggestSandwich.name} with ${biggestSandwich.ingredients.length} ingredients`);

//   Feature 2 - Limiting the options
//   The spiceLevel field in your interface should be limited to one of these options: "Mild", "Medium" or "Spicy"

// Union Type applied in the interface under spiceLevel.
  
//   Feature 3 - Caloric counts
//   Create an array containing all the Caloric counts of the sandwiches.
// Map the property caloricCount.

const caloricCountFilter = (menu: Sandwich) => menu.caloricCount;
const calorieProperty =  menu.map(caloricCountFilter);
console.log(calorieProperty);
  
//   Feature 4 - Vegetarian sandwiches
//   Create an array that only contains the names of all the vegetarian sandwiches.
// Filter all the vega Sandwiches
// Give the name of the sandwiches if is true

const filterVegaSandwiches = [];

for (let i = 0; i < menu.length; i++) {
  const sandwich = menu[i];
  if (sandwich.vegetarian === true) {
    filterVegaSandwiches.push(sandwich.name);
  }
}
console.log(filterVegaSandwiches);