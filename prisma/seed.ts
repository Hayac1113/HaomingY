import { PrismaClient } from "@prisma/client";
import animalData from "./data/animal.json";

const prisma = new PrismaClient();

const seed = async () => {
    for (let i = 0; i < animalData.length; i++) {
        const thisAnimal = animalData[i];
        await prisma.animal.create({
            data: thisAnimal,
        });
    }
};

seed();