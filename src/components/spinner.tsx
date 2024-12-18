import {LoaderCircle} from "lucide-react";

const Spinner = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center self-center">
        <LoaderCircle className="h-16 w-16 animate-spin" />
    </div>
    );
}

export  {Spinner};