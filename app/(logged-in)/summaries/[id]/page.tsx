import {getSummaryById} from "@/lib/summaries";
import {notFound} from "next/navigation";

const SummaryPage = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = params.id;

    const summary = await getSummaryById(id);

    if (!summary) return (
        notFound()
    )

    return (

        <div>{params.id}</div>
    )
}
export default SummaryPage


