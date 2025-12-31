import { useState } from 'react'
import TaskCard from "./components/TaskCard"

function ToDoList() {
    const [tasks, setTasks] = useState(["Play 7 Days To Die", "Finish this todo list app bro", "Hello Motherfucker"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTasks([...tasks, newTask])
    }

    function deleteTask(index) {
        const updatedList = tasks.filter((_, i) => i !== index)
        setTasks(updatedList)
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    onClick={addTask}
                    className="cursor-pointer"
                >
                    +
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li 
                        key={index}
                        className="flex justify-between gap-6"
                    >
                        <span>{task}</span>
                        <button
                            onClick={() => deleteTask(index)}
                            className="cursor-pointer"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ol>
            
        </div>
    )
}

export default ToDoList
