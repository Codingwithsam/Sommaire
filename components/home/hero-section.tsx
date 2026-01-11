import {Button} from "@/components/ui/button";
import {ArrowRight, Sparkles} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import HighlightedText from "@/components/common/highlighted-text";
import {MotionDiv, MotionH1, MotionSection} from "@/components/common/motion-wrapper";
import {containerVariants} from "@/utils/constants";

import {Transition} from "framer-motion";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        transition: {
            type: "spring" as Transition["type"],
            damping: 20,
            stiffness: 250,
            duration: 0.5,
        },
    },
}

const HeroSection = () => {
    return (
        <MotionSection
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            className={"relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl"}>
            <MotionDiv variants={itemVariants} className={"flex"}>
                <div
                    className={"relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group"}>
                    <Badge
                        variant={"secondary"}
                        className={"relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-50 transition-colors duration-200"}>
                        <Sparkles className={"w-6 h-6 mr-2 text-rose-600 animate-pulse"}/>
                        <p className={"text-base text-rose-600"}>Powered by AI</p>
                    </Badge>
                </div>
            </MotionDiv>
            <MotionH1 variants={itemVariants} className={"font-bold py-6 text-center"}>
                Transform PDF's into{" "}
                <HighlightedText text={"concise"}/>
                {" "}summaries
            </MotionH1>
            <h2 className={"text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600"}>Get a
                beautiful summary reel of the document in seconds.
            </h2>
            <Button
                variant="link"
                className="
                        group text-white mt-6 text-base sm:text-lg lg:text-xl
                        rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16
                        font-bold shadow-lg hover:no-underline
                        bg-linear-to-r from-slate-900 via-rose-500 to-slate-900
                        bg-[length:200%_100%] bg-[position:0%_50%]
                        hover:bg-[position:100%_50%]
                        transition-[background-position] duration-700 ease-in-out
                    "
            >
                <Link href="/dashboard" className="flex gap-2 items-center">
                    <span>Try Sommaire</span>
                    <ArrowRight
                        className="
                                transition-transform duration-500 ease-out
                                group-hover:translate-x-1
                            "
                    />
                </Link>
            </Button>
        </MotionSection>
    )
}
export default HeroSection
