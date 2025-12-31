type HighlightedTextProps = {
    text: string;
}
const HighlightedText = ({text}: HighlightedTextProps) => {
    return (
        <span className={"relative inline-block"}>
            <span className={"relative z-10 px-2"}> {text} </span>
            <span className={"absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skey-y-1"}
                  aria-hidden={true}/>
        </span>
    )
}
export default HighlightedText
