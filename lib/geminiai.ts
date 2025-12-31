import {GoogleGenerativeAI} from "@google/generative-ai"
import {SUMMARY_SYSTEM_PROMPT} from "@/utils/prompts"

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
)

export const generateSummaryFromGemini = async (pdfText: string) => {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
            }
        })

        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `${SUMMARY_SYSTEM_PROMPT}

Transform this document into an engaging, easy to read summary with contextually relevant emojis and proper markdown formatting: ${pdfText}`
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
            }
        })

        if (!result.response.text()) throw new Error("Empty response from Gemini API.")
        return result.response.text()
    } catch (err: any) {
        if (err?.status === 429) {
            throw new Error("RATE_LIMIT_EXCEEDED")
        }
        throw err
    }
}