import {notFound} from "next/navigation";

import {CardCompact} from "@/components/card-compact";
import {getTicket} from "@/features/queries/get-ticket";
import {TicketUpsertForm} from "@/features/ticket/components/ticket-upsert-form";

type TicketEditPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketEditPage = async ({params}: TicketEditPageProps) => {
    const {ticketId} = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact
                title="Edit Ticket"
                description="Edit an existing ticket"
                className="w-full max-w-[420px] animate-fade-from-top"
                content={<TicketUpsertForm ticket={ticket}/>}
            />
        </div>
    );
};

export default TicketEditPage;