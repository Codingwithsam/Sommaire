import BgGradient from "@/components/common/bg-gradient";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import {getSummaries} from "@/lib/summaries";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {uploadLimit} from "@/utils/constants";

const Page = async () => {
    const user = await currentUser();
    const userId = user?.id;
    if (!userId) {
        return redirect("/sign-in")
    }

    const summaries = await getSummaries(userId);
    const limitReached = summaries.length >= uploadLimit;

    if (limitReached) {
        redirect("/dashboard")
    }

    return <section className={"min-h-screen"}>
        <BgGradient/>
        <div className={"mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"}>
            <div className={"flex flex-col items-center justify-center"}>
                <UploadHeader/>
                <UploadForm/>
            </div>
        </div>
    </section>
}


export default Page