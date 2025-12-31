import {FileText, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const EmptySummaryState = () => {
    return (
        <div className={"text-center py-12"}>
            <div className={"flex flex-col items-center gap-4"}>
                <FileText className={"w-16 h-16 text-gray-400"}/>
                <h2 className={"text-xl font-semibold text-gray-700"}>No Summaries</h2>
                <p className={"text-gray-600 max-w-full"}>Upload your first PDF to get started with AI
                    powered
                    summaries</p>
                <Button variant={"link"} className="
                            group text-white shadow-lg hover:no-underline mt-4
                            bg-linear-to-r from-slate-900 via-rose-500 to-slate-900
                            bg-[length:200%_100%] bg-[position:0%_50%]
                            hover:bg-[position:100%_50%]
                            transition-[background-position] duration-700 ease-in-out
                        ">
                    <Link href={"/upload"} className={"flex text-white items-center"}>
                        Create your first Summary
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default EmptySummaryState
