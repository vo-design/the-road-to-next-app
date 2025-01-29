import {prisma} from "@/lib/prisma";

export async function getTicket(ticketId: string) {
    return prisma.ticket.findUnique({
        where: {id: ticketId},
        include: {
            user: {
                select: {
                    username: true, // Ensure the username field is included
                },
            },
        },
    });
}