import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Todos } from './components/Todos'
import CreateTodo from './components/CreateTodo'
import './components/components.css'
import useTodo from './hooks/useTodo'


function App() {
  
  const state = useTodo()

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
