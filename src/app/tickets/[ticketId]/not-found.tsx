import Link from "next/link";

import {Placeholder} from "@/components/Placeholder";
import {Button} from "@/components/ui/button";
import {ticketPaths} from "@/paths";

export default function NotFound() {
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