import "./TodoCounter.css"

const TodoCounter = ({ total: totalTodos, completed: completedTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}

export default TodoCounter
