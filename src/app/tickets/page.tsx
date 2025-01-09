import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";

import {Heading} from "@/components/heading";
import {Placeholder} from "@/components/Placeholder";
import {Spinner} from "@/components/spinner";
import {TicketList} from "@/features/ticket/components/ticket-list";

export const revalidate = 5;

const TicketsPage = () => {


    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading
                title="Tickets Page"
                description="All your tickets in one place"
            />
            <ErrorBoundary fallback={<Placeholder label="Something went wrong!"/>}>
                <Suspense fallback={<Spinner/>}>
                    <TicketList/>
                </Suspense>
            </ErrorBoundary>


        </div>
    );
};

export default TicketsPage;
