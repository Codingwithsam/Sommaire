"use client";

import UploadFormInput from "@/components/upload/upload-form-input";
import {z} from "zod";
import {useUploadThing} from "@/utils/uploadthing";
import {toast} from "sonner"
import {generatePdfSummary, storePdfSummaryAction} from "@/actions/upload-actions";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";

const schema = z.object({
    file:
        z.instanceof(File, {message: "Invalid File"}).refine((file) => file.size <= 20 * 1024 * 1024, "File size must be less than 20MB").refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF")
});

const UploadForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const {startUpload, routeConfig} = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            toast.success("Upload Complete!")
        },
        onUploadError: (err) => {
            toast.error("Error occured while uploading file", {
                description: err.message
            })
        },
        onUploadBegin: () => {
            toast.info("Upload begun! 🕚")
        }
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get("file") as File;

            //validating the fields, the form has
            const validatedFields = schema.safeParse({file});
            if (!validatedFields.success) {
                toast.error("Error occured uploading file", {
                    description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File"
                })
                setIsLoading(false);
                return;
            }

            //uploading a message
            toast.info("📄 Uploading PDF", {
                description: "We are uploading your PDF ✨"
            })

            //upload the file to UploadThing
            const resp = await startUpload([file]);
            if (!resp) {
                toast.error("Something went wrong ❗️", {
                    description: "Please use a different file"
                })
                setIsLoading(false);
                return
            }

            //processing message
            toast.info("📄 Processing PDF", {
                description: "Hang tight! Our AI is reading through your document! ✨"
            })

            //parse the PDF using LangChain
            const summary = await generatePdfSummary(resp)

            const {data = null, message = null} = summary || {}
            if (data) {
                let storeResult: any;
                toast.success("📄 Saving PDF...", {description: "Hang Tight! We are saving your summary! ✨"})
                if (data.summary) {
                    //call ai service
                    

                    // save the summary to Database
                    storeResult = await storePdfSummaryAction({
                        originalFileUrl: resp[0].serverData.file.url,
                        summaryText: data.summary,
                        title: data.title,
                        fileName: file.name,
                    })

                    //save the summary to the database
                    toast.success("✨ Summary Generated!", {
                        description: "Your PDF has successfully been summarized abd saved! ✨"
                    })
                    formRef.current?.reset();

                    //todo: redirect the user to [id] summary page
                    router.push(`/summaries/${storeResult?.data?.id}`)
                }
            }
            //save the summary to the NeonDB
            //redirect to the [id] summary page
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.error("Error occured", err)
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={"flex flex-col gap-8 w-full max-w-3xl mx-auto"}>
            <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit}/>

        </div>
    )
}
export default UploadForm
