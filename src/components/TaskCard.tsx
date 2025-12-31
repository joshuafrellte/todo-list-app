import { FaRegEdit, FaAngleUp, FaAngleDown } from "react-icons/fa"
import { TiDelete, TiDeleteOutline } from "react-icons/ti"

function TaskCard(props) {

    return (
        <div className="flex justify-between w-[350px] gap-4 p-2 bg-blue-400">
            <p>{props.task}</p>
            <div className="flex gap-2">
                <button className="cursor-pointer scale-125"><FaRegEdit/></button>
                <button className="cursor-pointer scale-135" onClick={props.onDelete}><TiDeleteOutline/></button>
                <div className="flex flex-col">
                    <button className="cursor-pointer" onClick={props.moveUp}><FaAngleUp /></button>
                    <button className="cursor-pointer" onClick={props.moveDown}><FaAngleDown /></button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard