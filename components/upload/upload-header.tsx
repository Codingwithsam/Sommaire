import {Badge} from "@/components/ui/badge";
import {Sparkles} from "lucide-react";
import HighlightedText from "@/components/common/highlighted-text";

const UploadHeader = () => {
    return (
        <div className={"flex flex-col items-center justify-center gap-6 text-center"}>
            <div className={"flex"}>
                <div
                    className={"relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group"}>
                    <Badge
                        variant={"secondary"}
                        className={"relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-50 transition-colors duration-200"}>
                        <Sparkles className={"w-6 h-6 mr-2 text-rose-600 animate-pulse"}/>
                        <p className={"text-base text-rose-600"}>AI-Powered Content Creation</p>
                    </Badge>
                </div>
            </div>
            <div className={"capitalize text-3xl tracking-tight text-gray-900 sm:text-4xl"}>
                <h1 className={"font-bold pt-6 text-center"}>
                    Start Uploading{" "}
                    <HighlightedText text={"Your PDF's"}/>
                </h1>
            </div>
            <div className={"text-lg leading-8 text-gray-600 max-w-2xl text-center"}>
                <p>Upload your PDF and let our AI do the magic! ✨</p>
            </div>
        </div>
    )
}
export default UploadHeader
