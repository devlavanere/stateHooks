import { useState } from 'react'

function ToDoList() {
    const [toDos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')

    //função para adicionar um novo item à lista de tarefas
    const addToDo = () => {
        //Atualiza o estado 'toDos' com um novo array que inclui o valor atual de 'inputValue'
        setToDos([...toDos, inputValue])
        //Limpa o valor do input, redefinindo 'inputValue' para uma string vazia
        setInputValue("")
    }
    
    return (
        <div>
            <h2>ToDoList</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={addToDo}>Adicionar Tarefa</button>
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList