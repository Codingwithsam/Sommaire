import Link from "next/link";
import {cn} from "@/lib/utils";
import {CheckIcon, ArrowRight} from "lucide-react";
import {MotionDiv} from "@/components/common/motion-wrapper";

type PriceType = {
    id: string;
    name: string;
    price: number;
    description: string;
    items: string[];
    paymentLink: string;
    priceId: string;
}

const show = true;

const plans = [
    {
        id: "basic",
        name: "Basic",
        price: 0,
        description: "Perfect for occasional use",
        items: [
            "5 PDF summaries Per Month",
            "Standard processing speed",
            "Email Support"
        ],
        paymentLink: "",
        priceId: ""
    },
    {
        id: "pro",
        name: "Pro - Coming Soon!...",
        price: 5.99,
        description: "For professionals and teams",
        items: [
            "Unlimited PDF summaries",
            "Priority processing",
            "24/7 priority support",
            "Markdown Export"
        ],
        paymentLink: "",
        priceId: ""
    }
]

const PricingCard = ({name, price, description, items, id, paymentLink}: PriceType) => {
    return (
        <MotionDiv initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                   transition={{duration: 0.5, delay: 0.3}}
                   className={"relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300"} id={id}>
            <div
                className={cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl", id === "pro" && "border-rose-500 gap-5 border-2")}>
                <div className={"flex justify-between items-center gap-4"}>
                    <div>
                        <p className={"text-lg lg:text-xl font-bold capitalize"}>{name}</p>
                        <p className={"text-base-content/80 mt-2"}>{description}</p>
                    </div>
                </div>
                <div className={"flex gap-2"}>
                    <p className={"text-5xl  tracking-tight font-extrabold"}>${price}</p>
                    <div className={"flex flex-col justify-end mb-[4px]"}>
                        <p className={"text-xs uppercase font-semibold"}>CAD</p>
                        <p className={"text-xs"}>/month</p>
                    </div>
                </div>
                <MotionDiv initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                           transition={{duration: 0.5, delay: 0.3}}
                           className={"space-y-2.5 leading-relaxed text-base flex-1"}>
                    {
                        items.map((item, idx) => (
                            <li key={idx} className={"flex items-center gap-2"}>
                                <CheckIcon size={18}/>
                                <span>{item}</span>
                            </li>
                        ))
                    }
                </MotionDiv>
                {!show &&
                    <div className={"space-y-2 flex justify-center w-full"}>
                        <Link
                            href={paymentLink}
                            className={cn("text-white py-1 border-2 w-full rounded-full flex items-center justify-center gap-2\n" +
                                "bg-linear-to-r from-rose-800 via-rose-500 to-rose-800\n" +
                                "bg-[length:200%_100%] bg-[position:0%_50%]\n" +
                                "hover:bg-[position:100%_50%]\n" +
                                "transition-[background-position] duration-700 ease-in-out",
                                id === "pro" ? "border-rose-900" : "border-rose-100 from-rose-400 to-rose-500"
                            )}
                        >
                            Buy Now <ArrowRight size={18}/>
                        </Link>
                    </div>
                }
            </div>
        </MotionDiv>
    )
};

const PricingSection = () => {
    return (
        <section className={"relative overflow-hidden"} id={"pricing"}>
            <div className={"py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12"}>
                <div className={"flex items-center justify-center w-full pb-12"}>
                    <h2 className={"uppercase font-bold text-xl mb-8 text-rose-700"}>Pricing</h2>
                </div>
                <div
                    className={"relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8"}>
                    {
                        plans.map((plan) => (
                            <PricingCard key={plan.id} {...plan} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default PricingSection
