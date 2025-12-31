import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const CtaSection = () => {
    return (
        <section className={"bg-gray-50 py-12"}>
            <div className={"py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12"}>
                <div className={"flex flex-col items-cener justify-center space-y-4 text-center"}>
                    <div>
                        <h2 className={"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"}>
                            Ready to Save Hours of Reading Time?
                        </h2>
                        <p className={"text-sm text-gray-500 mt-2 mb-4 max-w-[700px] mx-auto"}>
                            Transform lengthy documents into clear, actionable insights with our AI-powered summarizer.
                        </p>
                    </div>
                    <div className={"flex flex-col gap-2 min-[400px]:flex-row justify-center"}>
                        <div>
                            <Button
                                size={"lg"}
                                variant={"link"}
                                className={"w-full min-[400px]:w-auto border-rose-900 hover:no-underline\n" +
                                    "                        bg-linear-to-r from-rose-900 via-rose-500 to-rose-900\n" +
                                    "                        bg-[length:200%_100%] bg-[position:0%_50%]\n" +
                                    "                        hover:bg-[position:100%_50%]\n" +
                                    "                        transition-[background-position] duration-700 ease-in-out text-white"}>
                                <Link href={"/#pricing"} className={"flex items-center justify-center px-6 py-4"}>
                                    Get Started{" "}
                                    <ArrowRight className={"ml-2 h-4 w-4 animate-pulse"}/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CtaSection
