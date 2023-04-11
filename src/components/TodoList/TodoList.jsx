import "./TodoList.css"

const TodoList = (props) => {
  return (
    <section className="TodoLost-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      <ul>

      </ul>
    </section>
  )
}

export default TodoList
