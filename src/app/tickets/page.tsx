import clsx from "clsx";
import Link from "next/link";

import {initialTickets} from "@/data";
import {ticketPath} from "@/paths";

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>

    );
}

const PencilIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
        </svg>
    );
}

const DocIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
        </svg>
    );
}


const TICKET_ICONS = {
    OPEN: <DocIcon />,
    IN_PROGRESS: <PencilIcon/>,
    DONE: <CheckIcon/>,
};

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
                <p className="text-sm text-muted-foreground">All your tickets in one place</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
                {initialTickets.map((ticket) => (
                    <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
                        <div>{TICKET_ICONS[ticket.status]}</div>
                        <h3 className="text-lg truncate font-semibold">{ticket.title}</h3>
                        <p className={clsx("text-sm text-slate-500 truncate", {
                            "line-through": ticket.status === "DONE",
                        })}>{ticket.content}</p>
                        <Link href={ticketPath(String(ticket.id))} className="text-sm underline">
                            View
                        </Link>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default TicketsPage;