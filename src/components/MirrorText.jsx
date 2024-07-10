import { useState } from 'react'

function MirrorText() {
    const [text, setText] = useState('')
    
    return (
        <div>
            <h2>MirrorText</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>
    )
}

export default MirrorText
