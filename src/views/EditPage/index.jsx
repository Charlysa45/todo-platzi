import { useParams } from "react-router-dom"
import { TodoForm } from "../../components/TodoForm"
import { useTodos } from "../../hooks/useTodos"

export const EditPage = () => {
  const params = useParams()
  const id = Number(params.id)
  const { stateUpdaters } = useTodos()
  const { editTodo } = stateUpdaters
  return (
    <TodoForm
      label="Edita tu TODO"
      submitText="Editar TODO"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}
