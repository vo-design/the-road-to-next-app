"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from "zod";

import {setCookieByKey} from "@/actions/cookies";
import {ActionState, fromErrorToActionState, toActionState} from "@/components/form/utils/to-action-state";
import {prisma} from "@/lib/prisma";
import {ticketPath, ticketsPath} from "@/paths";

const upsertTicketSchema = z.object({
    title: z.string().min(1).max(191),
    content: z.string().min(1).max(1024),
    deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
    bounty: z.coerce.number().positive(),
});

export const upsertTicket = async (
    id: string | undefined,
    _actionState: ActionState,
    formData: FormData
) => {
    try {
        const data = upsertTicketSchema.parse({
            title: formData.get("title"),
            content: formData.get("content"),
            deadline: formData.get("dedline"),
            bounty: formData.get("bounty"),
        });

        await prisma.ticket.upsert({
            where: {id: id || ""},
            update: data,
            create: data,
        });
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    revalidatePath(ticketsPath());

    if (id) {
        await setCookieByKey("toast", "Ticket updated");
        redirect(ticketPath(id));
    }

    return toActionState("SUCCESS", "Ticket created");
};