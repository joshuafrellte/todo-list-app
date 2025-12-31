import { useState } from 'react'
import TaskCard from "./components/TaskCard"
import { IoMdAddCircle } from "react-icons/io"

function ToDoList() {
    const [tasks, setTasks] = useState<string[]>(["Play 7 Days To Die", "Finish this todo list app bro", "Hello Motherfucker"])
    const [newTask, setNewTask] = useState<string>("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
        console.log(newTask)
    }

    function addTask() {
        if (newTask) {
            setTasks([...tasks, newTask])
        } else if (tasks.includes(newTask)) {
            alert("nasulat na nmo ni bro")
        } else {
            alert("blaj")
        }
        
    }

    function deleteTask(index) {
        const updatedList = tasks.filter((_, i) => i !== index)
        setTasks(updatedList)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedList = [...tasks];
            [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]]
            setTasks(updatedList)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length-1) {
            const updatedList = [...tasks];
            [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]]
            setTasks(updatedList)
        }
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
                    <IoMdAddCircle />
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li 
                        key={index}
                        className="flex justify-between gap-6"
                    >
                        <TaskCard 
                            task={task} 
                            onDelete={() => deleteTask(index)}
                            moveUp={() => moveTaskUp(index)}
                            moveDown={() => moveTaskDown(index)}
                        />
                    </li>
                ))}
            </ol>
            
        </div>
    )
}

export default ToDoList
