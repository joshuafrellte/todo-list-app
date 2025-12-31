import { FaRegEdit, FaAngleUp, FaAngleDown } from "react-icons/fa"
import { TiDelete, TiDeleteOutline } from "react-icons/ti"

function TaskCard(props) {

    return (
        <div className="flex justify-between items-center w-[350px] sm:w-[500px] gap-4 px-3 py-1 border-1 rounded-sm">
            <p className="overflow-hidden text-ellipsis">{props.task}</p>
            <div className="flex gap-2 sm:gap-3">
                <button className="text-xl sm:text-2xl cursor-pointer" onClick={props.edit}><FaRegEdit/></button>
                <button className="text-lg sm:text-xl cursor-pointer scale-125" onClick={props.onDelete}><TiDeleteOutline/></button>
                <div className="flex flex-col">
                    <button className="text-lg sm:text-xl cursor-pointer" onClick={props.moveUp}><FaAngleUp /></button>
                    <button className="text-lg sm:text-xl ncursor-pointer" onClick={props.moveDown}><FaAngleDown /></button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard