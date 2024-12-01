import Link from "next/link";

import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketPaths } from "@/paths";

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

  const ticket = initialTickets.find(
    (ticket) => String(ticket.id) === ticketId,
  );

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketPaths()}>Go to tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
