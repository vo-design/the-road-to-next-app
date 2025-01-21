import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
    {
        // id: "1",
        title: "Ticket 1",
        content: "This is a Ticket 1 from the database.",
        status: "DONE" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 499, //$4.99
    },
    {
        // id: "2",
        title: "Ticket 2",
        content: "This is a Ticket 2 from the database.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 399, //$3.99
    },
    {
        // id: "3",
        title: "Ticket 3",
        content: "This is a Ticket 3 from the database.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 599, //$5.99
    },
];


const seed = async () => {
    const t0 = performance.now();
    console.log("DB Seed: Started ...");

    await prisma.ticket.deleteMany();

    await prisma.ticket.createMany({
        data: tickets,
    });

    const t1 = performance.now();
    console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();