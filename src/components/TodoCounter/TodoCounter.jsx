import "./TodoCounter.css"

const TodoCounter = ({
  total: totalTodos,
  completed: completedTodos,
  loading,
}) => {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}

export default TodoCounter
