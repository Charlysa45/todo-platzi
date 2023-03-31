import './TodoList.css'

const TodoList = ({ children }) => {
  return (
    <li>
      <span>C</span>
      <p>{children}</p>
      <span>X</span>
    </li>
  )
}

export default TodoList
