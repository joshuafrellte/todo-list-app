import { useState } from 'react'
import TaskCard from "./components/TaskCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>Todo List</h1>
      <div className="bg-blue-300">
        <input placeholder='Enter Task'></input>
        <button className="px-2 cursor-pointer">+</button>
      </div>
        
      <TaskCard/>
    </div>
  )
}

export default App
