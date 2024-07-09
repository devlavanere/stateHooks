import { useState } from "react";

function TextArea() {
    const [text, textContent] = useState('')

    return (
        <div>
            <textarea name="" id="" onChange={(event) => textContent(event.target.value)}></textarea>
            <p>{text}</p>
        </div>
    )
}

export default TextArea