import Counter from './components/Counter'
import MirrorText from './components/MirrorText'
import TextArea from './components/TextArea'
import ToDoList from './components/ToDoList'

import './App.css'
import NavigationTabs from './components/NavigationTabs'

function App() {
  return (
    <>
      <h1 className='titulo'>Exercícios Aula - 35</h1>
      <div className='container'>
        <Counter />
        <TextArea />
        <MirrorText />
        <ToDoList />
        <div className='navigation'>
          <NavigationTabs />
        </div>
      </div>
    </>
  )
}

export default App


