import Link from "next/link";

import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import {getTicket} from "@/features/queries/get-ticket";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketPaths } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {

  const ticket = await getTicket(params.ticketId);

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
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
