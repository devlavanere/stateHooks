import { useState } from "react";

function TextArea() {
    const [text, textContent] = useState('')

    return (
        <div>
            <h2>TextArea</h2>
            <textarea name="" id="" onChange={(event) => textContent(event.target.value)}></textarea>
            <p>{text}</p>
        </div>
    )
}

export default TextArea