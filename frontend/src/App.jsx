import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Todos } from './components/Todos'
import CreateTodo from './components/CreateTodo'
import WrapperCard from './components/WrapperCard'
import VerticalDividers from './components/VerticalDividers'

function App() {
  const [state , setTodo] = useState([])
  
  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    setTodo(json)
  })
  return (
  <div>
    <CreateTodo />
    <Todos prop={state} />
    <VerticalDividers prop={state}/>
  </div>
  )
}

export default App
