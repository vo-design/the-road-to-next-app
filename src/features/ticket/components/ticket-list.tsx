import {TicketItem} from "@/features/ticket/components/ticket-item";
import {getTickets} from "@/features/ticket/queries/get-tickets";

type TicketListProps = {
    userId?: string;
};

const TicketList = async ({userId}: TicketListProps) => {
    const tickets = await getTickets(userId);

    return (
        <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
            {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket}/>
            ))}
        </div>
    );
};

export {TicketList};