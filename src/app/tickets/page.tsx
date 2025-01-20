import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";

import {CardCompact} from "@/components/card-compact";
import {Heading} from "@/components/heading";
import {Placeholder} from "@/components/Placeholder";
import {RedirectToast} from "@/components/redirect-toast";
import {Spinner} from "@/components/spinner";
import {TicketList} from "@/features/ticket/components/ticket-list";
import {TicketUpsertForm} from "@/features/ticket/components/ticket-upsert-form";


const TicketsPage = () => {


    return (
        <>
            <div className="flex-1 flex flex-col gap-y-8">
                <Heading
                    title="Tickets Page"
                    description="All your tickets in one place"
                />

                <CardCompact
                    title="Create Ticket"
                    description="A new ticket will be created"
                    className="w-full max-w-[420px] self-center"
                    content={<TicketUpsertForm/>}
                />

                <ErrorBoundary fallback={<Placeholder label="Something went wrong!"/>}>
                    <Suspense fallback={<Spinner/>}>
                        <TicketList/>
                    </Suspense>
                </ErrorBoundary>
            </div>
            <RedirectToast/>
        </>

    );
};

export default TicketsPage;
