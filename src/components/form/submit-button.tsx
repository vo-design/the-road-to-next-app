import {LoaderCircle} from "lucide-react";
import {useFormStatus} from "react-dom";

import {Button} from "@/components/ui/button";

type SubmitButtonProps = {
    label: string;
};

const SubmitButton = ({label}: SubmitButtonProps) => {
    const {pending} = useFormStatus();

    return (
        <Button disabled={pending} type="submit">
            {pending && <LoaderCircle className="mr-2 h-4 w-4 animate-spin"/>}
            {label}
        </Button>
    );
}

export {SubmitButton};