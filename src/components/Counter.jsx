import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h2>Counter</h2>
                <p>Você clicou {count} vezes</p>
                <button onClick={() => setCount(count + 1)}>
                    Clique aqui
                </button>
            </div>
        </>
    )
}

export default Counter