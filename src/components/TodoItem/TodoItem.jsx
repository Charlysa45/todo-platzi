import { AiFillDelete, AiOutlineCheckCircle, AiFillEdit } from "react-icons/ai"

import "./TodoItem.css"
import { IconContext } from "react-icons"

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <IconContext.Provider
        value={{
          color: `${props.completed && "green"}`,
          className: `Icon Icon-check`,
        }}
      >
        <span onClick={props.onComplete}>
          <AiOutlineCheckCircle />
        </span>
      </IconContext.Provider>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-edit" onClick={props.onEdit}>
        <AiFillEdit />
      </span>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <AiFillDelete />
      </span>
    </li>
  )
}

export default TodoItem
