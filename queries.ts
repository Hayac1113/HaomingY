import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient ();

const runQueries = async () => {
    const allSheep = await prisma.animal.findMany({
        where: {
            kind: "sheep",
        },
    });
    console.log("== All Sheep ==");
    console.log(allSheep);

    const sheepBella = await prisma.animal.findUnique({
        where: {
            name: "Bella",
        },
    });
    console.log(sheepBella);

};



runQueries();