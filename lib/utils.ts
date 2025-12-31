import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatFileName(url: string): string {
    try {
        const pathname = new URL(url).pathname
        const rawFileName = pathname.split("/").pop()

        if (!rawFileName) return "Untitled file"

        const decoded = decodeURIComponent(rawFileName)

        return decoded
            .replace(/\.[^/.]+$/, "") // remove extension
            .replace(/[-_]+/g, " ")    // replace dashes/underscores with spaces
            .replace(/\s+/g, " ")      // collapse spaces
            .trim()
    } catch {
        return "Untitled file"
    }
}
