"use client";

import {Ticket} from "@prisma/client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

import {upsertTicket} from "../actions/upsert-ticket";
import {SubmitButton} from "@/components/form/submit-button";


type TicketUpsertFormProps = {
    ticket?: Ticket;
};

const TicketUpsertForm = ({ticket}: TicketUpsertFormProps) => {

    return (
        <form
            action={upsertTicket.bind(null, ticket?.id)}
            className="flex flex-col gap-y-4"
        >
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={ticket?.title}/>

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket?.content}/>

            <SubmitButton label={ticket ? "Edit" : "Create"}/>
        </form>
    );
};

export {TicketUpsertForm};