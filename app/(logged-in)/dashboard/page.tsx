import BgGradient from "@/components/common/bg-gradient";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import SummaryCard from "@/components/summaries/summary-card";
import {getSummaries} from "@/lib/summaries";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import EmptySummaryState from "@/components/summaries/empty-summary-state";
import {uploadLimit} from "@/utils/constants";
import {MotionDiv} from "@/components/common/motion-wrapper";

const Page = async () => {
    const user = await currentUser();
    const userId = user?.id;
    if (!userId) {
        return redirect("/sign-in")
    }

    const summaries = await getSummaries(userId);
    const limitReached = summaries.length >= uploadLimit;
    return (
        <main className={"min-h-screen"}>
            <BgGradient className={"from-emerald-200 via-teal-200 to-cyan-200"}/>
            <div className={"container mx-auto flex flex-col gap-4"}>
                <div className={"px-2 py-12 sm:py-24"}>
                    <div className={"flex gap-4 mb-8 justify-between"}>
                        <div className={"flex flex-col gap-2"}>
                            <h1 className={"text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent"}>Your
                                Summaries</h1>
                            <p className={"text-gray-600 text-sm md:text-lg"}> Transform your PDF'S into concise,
                                actionable
                                insights</p>
                        </div>
                        {
                            !limitReached &&
                            <Button variant={"link"} className="
                            group text-white shadow-lg hover:no-underline
                            bg-linear-to-r from-slate-900 via-rose-500 to-slate-900
                            bg-[length:200%_100%] bg-[position:0%_50%]
                            hover:bg-[position:100%_50%]
                            transition-[background-position] duration-700 ease-in-out
                            ">
                                <Link href={"/upload"} className={"flex text-white items-center"}>
                                    <Plus className={"w-5 h-5 mr-2"}/>
                                    New Summary
                                </Link>
                            </Button>
                        }
                    </div>
                    {
                        limitReached &&
                        <div className={"mb-6"}>
                            <div className={"bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-800"}>
                                <p className={"text-sm"}>You've reached the limit of {uploadLimit} uploads on the Basic
                                    Plan
                                    <Link href={"/#pricing"}
                                          className={"ml-1 underline underline-offset-4 hover:no-underline"}>{" "}Upgrade
                                        to
                                        Pro for unlimited uploads</Link>
                                </p>
                            </div>
                        </div>
                    }

                    {summaries.length === 0 ?
                        <EmptySummaryState/>
                        :
                        <div className={"grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0"}>
                            {
                                summaries.map((summary, index) => (
                                    <MotionDiv key={index} initial={{y: 20, opacity: 0}}
                                               whileInView={{y: 0, opacity: 1}}
                                               transition={{duration: 0.5, delay: 0.3}}>
                                        <SummaryCard summary={summary}/>
                                    </MotionDiv>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}
export default Page
