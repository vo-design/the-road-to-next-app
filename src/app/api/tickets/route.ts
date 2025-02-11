import {getTickets} from "@/features/ticket/queries/get-tickets";

export async function GET() {
    const {list, metadata} = await getTickets(undefined, {
        search: "",
        size: 5,
        page: 0,
        sortKey: "createdAt",
        sortValue: "desc",
    });

    return Response.json({list, metadata});
}