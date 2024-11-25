import {initialTickets} from "../../../data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    let ticketId: string;

    try {
        const { ticketId: id } = await params;
        ticketId = id; // For additional use if needed
    } catch (error) {
        console.error("Error fetching ticket ID:", error);
        return <div>Unable to load ticket. Please try again later.</div>;
    }

    const ticket = initialTickets.find((ticket) => ticket.id === Number(ticketId)); // Ensure correct type

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div>
            <h2 className="text-lg">{ticket.title}</h2>
            <p className="text-sm">{ticket.content}</p>
        </div>
    );
};

export default TicketPage;