import { TodoForm } from "../../components/TodoForm"
import { useTodos } from "../../hooks/useTodos"

export const NewTodoPage = () => {
  const { stateUpdaters } = useTodos()
  const { addTodo } = stateUpdaters
  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir TODO"
      submitEvent={(text) => addTodo(text)}
    />
  )
}
