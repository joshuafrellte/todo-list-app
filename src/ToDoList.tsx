import { useState } from 'react'
import TaskCard from "./components/TaskCard"

function ToDoList() {
    const [tasks, setTasks] = useState(["Finish this todo app", "Play Monster Hunter: Rise", "Study more ReactJS", "Hello World"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTasks([...tasks, newTask])
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <h1>Todo List</h1>
            <div className="bg-blue-300 p-2">
                <input 
                    type='text'
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button 
                    onClick={addTask} 
                    className="px-2 cursor-pointer"
                >
                    +
                </button>
            </div>
            
            <ol className="flex flex-col gap-2">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <TaskCard task={task}/>
                    </li>
                )}
            </ol>
            
        </div>
    )
}

export default ToDoList
