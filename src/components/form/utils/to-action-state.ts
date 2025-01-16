import {undefined, ZodError} from "zod";
import {error} from "next/dist/build/output/log";

export type ActionState = {
    message: string;
    payload?: FormData;
    fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
    error: unknown,
    formData?: FormData
): ActionState => {
    if (error instanceof ZodError) {
        // if validation error with Zod, return first error message
        return {
            message: "",
            fieldErrors: error.flatten().fieldErrors,
            payload: formData,
        };
    } else if (error instanceof Error) {
        // if another error instance, return error message
        // e.g. database error
        return {
            fieldErrors: {},
            message: error.message,
            payload: formData
        };
    } else {
        // if not an error instance but something else crashed
        // return generic error message
        return {
            fieldErrors: {},
            message: "An unknown error occurred",
            payload: formData
        };
    }
};