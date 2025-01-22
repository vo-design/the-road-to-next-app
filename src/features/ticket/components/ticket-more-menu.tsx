"use client";

import {Ticket, TicketStatus} from "@prisma/client";
import {Trash} from "lucide-react";
import {toast} from "sonner";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {updateTicketStatus} from "../actions/update-ticket-status";
import {TICKET_STATUS_LABELS} from "../constants";

type TicketMoreMenuProps = {
    ticket: Ticket;
    trigger: React.ReactElement;
};

const TicketMoreMenu = ({ticket, trigger}: TicketMoreMenuProps) => {
    const deleteButton = (
        <DropdownMenuItem>
            <Trash className="h-4 w-4"/>
            <span>Delete</span>
        </DropdownMenuItem>
    );

    const handleUpdateTicketStatus = async (value: string) => {
        const result = await updateTicketStatus(ticket.id, value as TicketStatus);

        if (result.status === "ERROR") {
            toast.error(result.message);
        } else if (result.status === "SUCCESS") {
            toast.success(result.message);
        }
    };

    const ticketStatusRadioGroupItems = (
        <DropdownMenuRadioGroup
            value={ticket.status}
            onValueChange={handleUpdateTicketStatus}
        >
            {(Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>).map((key) => (
                <DropdownMenuRadioItem key={key} value={key}>
                    {TICKET_STATUS_LABELS[key]}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">
                {ticketStatusRadioGroupItems}
                <DropdownMenuSeparator/>
                {deleteButton}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export {TicketMoreMenu};