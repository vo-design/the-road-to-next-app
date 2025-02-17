"use client";

import {LoaderCircle, Trash} from "lucide-react";
import {useConfirmDialog} from "@/components/confirm-dialog";
import {Button} from "@/components/ui/button";
import {deleteComment} from "../actions/delete-comment";

type CommentDeleteButtonProps = {
    id: string;
    onDeleteComment?: (id: string) => void;
};

const CommentDeleteButton = ({
                                 id,
                                 onDeleteComment,
                             }: CommentDeleteButtonProps) => {
    const [deleteButton, deleteDialog] = useConfirmDialog({
        action: deleteComment.bind(null, id),
        trigger: (isPending) => (
            <Button variant="outline" size="icon">
                {isPending ? (
                    <LoaderCircle className="w-4 h-4 animate-spin"/>
                ) : (
                    <Trash className="w-4 h-4"/>
                )}
            </Button>
        ),
        onSuccess: () => onDeleteComment?.(id),
    });

    return (
        <>
            {deleteDialog}
            {deleteButton}
        </>
    );
};

export {CommentDeleteButton};