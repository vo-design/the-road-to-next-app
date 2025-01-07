import {Ticket} from "@prisma/client";
import {clsx} from "clsx";
import {SquareArrowOutUpRight, TrashIcon} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {deleteTicket} from "@/features/ticket/actions/delete-ticket";
import {TICKET_ICONS} from "@/features/ticket/constants";
import {ticketPath} from "@/paths";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ticket, isDetail}: TicketItemProps) => {
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(String(ticket.id))}>
                <SquareArrowOutUpRight className="h-4 w-4"/>
            </Link>
        </Button>
    );


    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant="outline" size="icon">
                <TrashIcon className="h-4 w-4"/>
            </Button>
        </form>

    )

    return (
        <div
            className={clsx("w-full flex gap-x-1", {
                "max-w-[580px]": isDetail,
                "max-w-[420px]": !isDetail,
            })}
        >
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
          <span
              className={clsx("whitespace-break-spaces", {
                  "line-clamp-3": !isDetail,
              })}
          >
            {ticket.content}
          </span>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-1">
                {isDetail ? deleteButton : detailButton}
            </div>
        </div>
    );
};

export {TicketItem};
