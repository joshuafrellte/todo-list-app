import { FaRegEdit, FaAngleUp, FaAngleDown } from "react-icons/fa"
import { TiDelete, TiDeleteOutline } from "react-icons/ti"

function TaskCard(props) {

    return (
        <div className="flex justify-between items-center w-[350px] gap-4 px-3 py-1 bg-blue-400 rounded-sm">
            <p className="overflow-hidden text-ellipsis">{props.task}</p>
            <div className="flex gap-2">
                <button className="cursor-pointer scale-110" onClick={props.edit}><FaRegEdit/></button>
                <button className="cursor-pointer scale-125" onClick={props.onDelete}><TiDeleteOutline/></button>
                <div className="flex flex-col">
                    <button className="cursor-pointer" onClick={props.moveUp}><FaAngleUp /></button>
                    <button className="cursor-pointer" onClick={props.moveDown}><FaAngleDown /></button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard