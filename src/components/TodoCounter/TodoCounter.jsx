import { useContext } from "react"

import "./TodoCounter.css"
import { TodoContext } from "../../TodoContext"
const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos}
    </h2>
  )
}

export default TodoCounter
