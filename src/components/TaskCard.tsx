import { FaRegEdit } from "react-icons/fa"
import { TiDelete, TiDeleteOutline } from "react-icons/ti"

function TaskCard(props) {

    return (
        <div className="flex justify-between w-80 gap-4 p-2 bg-blue-400">
            <p>{props.task}</p>
            <div className="flex gap-2">
                <button className="cursor-pointer"><FaRegEdit/></button>
                <button className="cursor-pointer scale-110"><TiDeleteOutline/></button>
            </div>
        </div>
    )
}

export default TaskCard