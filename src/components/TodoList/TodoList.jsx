import "./TodoList.css"

const TodoList = (props) => {
  const renderFunc = props.render || props.children
  return (
    <section className="TodoLost-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props?.totalTodos && props.onEmptyTodos()}

      {props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchItem)}

      {props.searchedTodos.map(renderFunc)}
    </section>
  )
}

export default TodoList
