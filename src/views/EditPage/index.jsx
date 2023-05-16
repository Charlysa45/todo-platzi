import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../components/TodoForm'
import { useTodos } from '../../hooks/useTodos'

export const EditPage = () => {
  const location = useLocation()
  const params = useParams()
  const id = Number(params.id)

  const { states, stateUpdaters } = useTodos()
  const { loading, getTodo } = states
  const { editTodo } = stateUpdaters

  let todoText

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cagando ando...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar TODO"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}
