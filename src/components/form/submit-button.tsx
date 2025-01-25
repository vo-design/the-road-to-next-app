"use client";

import clsx from "clsx";
import {LoaderCircle} from "lucide-react";
import React, {cloneElement} from "react";
import {useFormStatus} from "react-dom";
import {Button} from "../ui/button";

type SubmitButtonProps = {
    label?: string;
    icon?: React.ReactElement<{ className?: string }>; // Ensure the icon supports className
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link";
    size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({
                          label,
                          icon,
                          variant = "default",
                          size = "default",
                      }: SubmitButtonProps) => {
    const {pending} = useFormStatus();

    return (
        <Button disabled={pending} type="submit" variant={variant} size={size}>
            {pending && (
                <LoaderCircle
                    className={clsx("h-4 w-4 animate-spin", {
                        "mr-2": !!label,
                    })}
                />
            )}
            {label}
            {pending
                ? null
                : icon && (
                <span
                    className={clsx({
                        "ml-2": !!label,
                    })}
                >
                          {cloneElement(icon, {
                              className: "w-4 h-4",
                          })}
                      </span>
            )}
        </Button>
    );
};

export { SubmitButton };