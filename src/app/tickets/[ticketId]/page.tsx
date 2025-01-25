import {notFound} from "next/navigation";
import {getTicket} from "@/features/ticket/queries/get-ticket";
import {TicketItem} from "@/features/ticket/components/ticket-item";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({params}: TicketPageProps) => {

    const resolvedParams = await params; // Await the promise to resolve the params
    const ticket = await getTicket(resolvedParams.ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    );
};

export default TicketPage;
