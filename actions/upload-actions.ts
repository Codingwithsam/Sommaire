"use server"

import {fetchAndExtractPdfText} from "@/lib/langchain";
import {generateSummaryFromOpenAI} from "@/lib/openai";
import {generateSummaryFromGemini} from "@/lib/geminiai";
import {auth} from "@clerk/nextjs/server";
import {getDbConnection} from "@/lib/db";
import {formatFileNameAsTitle} from "@/utils/format-utils";
import {revalidatePath} from "next/cache";

interface PdfSummaryType {
    userId?: string,
    originalFileUrl: string,
    summaryText: string,
    title: string,
    fileName: string
}

export async function getPdfText({fileUrl, fileName}: { fileUrl: string, fileName: string }) {
    if (!fileUrl) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }
}

export async function generatePdfSummary({fileUrl, fileName}: { fileUrl: string, fileName: string }) {
    if (!fileUrl) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }

    if (!fileUrl) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(fileUrl)

        let summary;
        try {
            summary = await generateSummaryFromOpenAI(pdfText)
        } catch (err) {
            console.log(err)

            //call gemini code
            if (err instanceof Error && err.message === "RATE_LIMIT_EXCEEDED") {
                try {
                    summary = await generateSummaryFromGemini(pdfText)
                } catch (geminiErr) {
                    console.error("Gemini API Failed after OPENAI quota exceeded", geminiErr)
                    throw new Error("Failed to generate summary with available AI providers")

                }
            }
        }

        if (!summary) {
            return {
                success: false,
                message: "Summary generation failed!",
                data: null
            }
        }

        const formattedFileName = formatFileNameAsTitle(fileName);
        return {
            success: true,
            message: "Summary generated successfully!",
            data: {
                title: fileName,
                summary,
            },
        }
    } catch (err) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }
}

async function savePdfSummary({userId, originalFileUrl, summaryText, title, fileName}: PdfSummaryType) {
    //SQL inserting SQL summary
    try {
        const sql = await getDbConnection();
        const [result] = await sql`INSERT INTO pdf_summaries (user_id, original_file_url, summary_text, title, file_name)
                                   VALUES (${userId}, ${originalFileUrl}, ${summaryText}, ${title},
                                           ${fileName}) RETURNING id, summary_text`
        return result;
    } catch (err) {
        console.error("Error saving PDF Summary", err)
        throw err;
    }
}

export async function storePdfSummaryAction({originalFileUrl, summaryText, title, fileName}: PdfSummaryType) {


    //savePdfSummary function
    let savedSummary: any;
    try {
        // user is logged in
        const {userId} = await auth();
        if (!userId) {
            return {
                success: false,
                message: "User not found"
            }
        }

        //save the pdfSummary
        savedSummary = await savePdfSummary({
            userId,
            originalFileUrl,
            summaryText,
            title,
            fileName
        });

        if (!savedSummary) {
            return {
                success: false,
                message: "Error Saving PDF Summary, Try Again..."
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Error Saving PDF Summary"
        }
    }

    //revalidate our cache
    revalidatePath(`/summaries/${savedSummary.id}`)

    return {
        success: true,
        message: "PDF Summary Saved Successfully",
        data: {
            id: savedSummary.id,
            summaryText: savedSummary.summary_text
        }
    }
}