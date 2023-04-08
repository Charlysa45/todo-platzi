import { useContext, useState } from "react"
import { TodoContext } from "../../TodoContext"

import "./TodoForm.css"

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("")
  const { addTodo, setOpenModal } = useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()

    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir Todo
        </button>
      </div>
    </form>
  )
}
