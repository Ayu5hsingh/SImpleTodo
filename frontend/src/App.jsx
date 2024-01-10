import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Todos } from './components/Todos'
import CreateTodo from './components/CreateTodo'
import './components/components.css'


function App() {
  const [state, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos")
        if (!response.ok) {
          throw new Error("The server resfused the connection")
        }
        const json = await response.json()
        setTodo(json)
      } catch (e) {
        console.log("Error : ", e)
      }
    }
    fetchData()
  },[state])

  return (
    <div className='page'>
      <div className='inputCard'>
        <CreateTodo  />
      </div>
      <Todos prop={state} />
    </div>
  )
}

export default App
