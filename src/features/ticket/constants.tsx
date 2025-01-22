import {CircleCheck, FolderOpen, LoaderCircle} from "lucide-react";

export const TICKET_ICONS = {
    OPEN: <FolderOpen/>,
    IN_PROGRESS: <LoaderCircle/>,
    DONE: <CircleCheck/>,
};

export const TICKET_STATUS_LABELS = {
    OPEN: "Open",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
};