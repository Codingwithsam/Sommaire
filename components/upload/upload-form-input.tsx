"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ArrowUp, Loader2} from "lucide-react";
import {forwardRef} from "react";
import uploadForm from "@/components/upload/upload-form";
import {cn} from "@/lib/utils";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(({onSubmit, isLoading}, ref) => {
    return (
        <form ref={ref} className={"flex flex-col gap-6 mt-8"} onSubmit={onSubmit}>
            <div className={"flex justify-end items-center gap-1.5"}>
                <Input
                    id={"file"}
                    type={"file"}
                    name={"file"}
                    accept={"application/pdf"}
                    placeholder={"Enter a custom filename"}
                    required
                    className={cn(isLoading && "opacity-50 cursor-not-allowed")}
                    disabled={isLoading}
                />

                <Button
                    variant="link"
                    className="
                        group text-white shadow-lg hover:no-underline
                        bg-linear-to-r from-slate-900 via-rose-500 to-slate-900
                        bg-[length:200%_100%] bg-[position:0%_50%]
                        hover:bg-[position:100%_50%]
                        transition-[background-position] duration-700 ease-in-out
                    "
                    disabled={isLoading}
                >
                    <span>{isLoading ?
                        "Processing..."
                        :
                        "Upload your PDF"
                    }
                    </span>
                    {!isLoading ? <ArrowUp
                            className="
                                transition-transform duration-500 ease-out
                                group-hover:translate-x-1
                            "
                        /> :
                        <Loader2 className={"h-4 w-4 animate-spin"}/>
                    }
                </Button>
            </div>
        </form>
    )
})
UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput
