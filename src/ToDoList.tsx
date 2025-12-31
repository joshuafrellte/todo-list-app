import { useState, useEffect } from 'react'
import TaskCard from "./components/TaskCard"
import { IoMdAddCircle } from "react-icons/io"

function ToDoList() {
    const [tasks, setTasks] = useState<string[]>(() => {
        const savedTasks = localStorage.getItem('tasks')
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    const [newTask, setNewTask] = useState<string>("")

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {

    }, [])

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (!newTask) {
            alert("empty ahh")
            return
        }
        if (tasks.includes(newTask)) {
            alert("nasulat na nmo ni bro")
            return
        }
        setTasks([...tasks, newTask])
        setNewTask("")
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

    function editTask(index) {
        // click edit to show in field
        setNewTask(tasks[index])
        // setTasks(tasks.splice(index, 1, newTask))
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl uppercase font-bold tracking-wide mt-8 mb-1">To Do List</h1>
            <div className="flex justify-between items-center w-[350px] sm:w-[500px] mb-1 border-1 rounded-sm">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="w-[310px] pl-3 pt-2 pb-2 outline-0"
                />
                <button
                    onClick={addTask}
                    className="text-2xl pr-2 cursor-pointer"
                >
                    <IoMdAddCircle />
                </button>
            </div>
            <ol className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <TaskCard 
                            task={task} 
                            onDelete={() => deleteTask(index)}
                            edit={() => editTask(index)}
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
