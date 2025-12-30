import { FaRegEdit } from "react-icons/fa"
import { TiDelete, TiDeleteOutline } from "react-icons/ti"

function TaskCard() {

    return (
        <div className="flex justify-center w-fit gap-4 bg-blue-400">
            <p>Finish this to-do app project</p>
            <div>
                <button className="cursor-pointer"><FaRegEdit/></button>
                <button className="cursor-pointer"><TiDeleteOutline/></button>
            </div>
        </div>
    )
}

export default TaskCard