interface Farm {
    animals: Animal[];
    buildings: FarmBuilding[];
    farmName: string;
  };

// Animals section

  interface Animal {
    kind: string;
    id: number;
  }

  const typeOfAnimal: Animal[] = 
  [
    {
    kind: "Chicken",
    id: 1,
    },
    {
    kind: "Cow",
    id: 2,
    },
    {
    kind: "Sheep",
    id: 3,
    },
    {
     kind: "Goat",
    id: 4,
    },
    {
    kind: "Pig",
    id: 5,
    },
];

//Building section

interface FarmBuilding {
    shelters: "Big"|"Medium"|"Small";
    Kind: string[];
  };

const buildings: FarmBuilding[] = 
[
    {
        shelters: "Big",
        Kind: ["Cow", "Goat", "Pig"]
    },
    {
        shelters: "Medium",
        Kind: ["Sheep"] 
    },
    {
        shelters: "Small",
        Kind: ["Chicken"] 
    }
]

//Farm Name section

const farmName = "Random Farm";

const myFarm: Farm[] = [
    {
        animals: ["Chicken", 1],
        buildings: 
        farmName: 
    }
]