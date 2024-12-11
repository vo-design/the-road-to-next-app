import { initialTickets } from "@/data";

import { Ticket } from "../ticket/types";

export const getTickets = async (): Promise<Ticket[]> => {


  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
