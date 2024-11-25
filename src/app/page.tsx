import Link from "next/link";

import {ticketPaths} from "@/paths";

const HomePage = () => {
  return (
      <div>
        <h2 className="text-lg">Home Page</h2>
        <Link href={ticketPaths()} className="underlined">
          Go to tickets
        </Link>
      </div>
  );
};

export default HomePage;