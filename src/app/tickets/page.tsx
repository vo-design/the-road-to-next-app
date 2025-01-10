import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";

import {Heading} from "@/components/heading";
import {Placeholder} from "@/components/Placeholder";
import {Spinner} from "@/components/spinner";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {TicketCreateForm} from "@/features/ticket/components/ticket-create-form";
import {TicketList} from "@/features/ticket/components/ticket-list";


const TicketsPage = () => {


    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading
                title="Tickets Page"
                description="All your tickets in one place"
            />
            <Card className="w-full max-w-[420px] self-center">
                <CardHeader>
                    <CardTitle>Create Ticket</CardTitle>
                    <CardDescription>A new ticket will be created</CardDescription>
                </CardHeader>
                <CardContent>
                    <TicketCreateForm/>
                </CardContent>
            </Card>
            <ErrorBoundary fallback={<Placeholder label="Something went wrong!"/>}>
                <Suspense fallback={<Spinner/>}>
                    <TicketList/>
                </Suspense>
            </ErrorBoundary>


        </div>
    );
};

export default TicketsPage;
