import TodoCounter from "./components/TodoCounter/TodoCounter"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"
import { useContext } from "react"
import { Modal } from "./components/Modal/Index"
import { TodoContext } from "./TodoContext"
import { TodoForm } from "./components/TodoForm"

import "./App.css"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import { LoadingTodos } from "./components/LoadingTodos"
import { EmptyTodos } from "./components/EmptyTodos"

function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchItem,
    setSearchItem,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchItem={searchItem} setSearchItem={setSearchItem} />
      {!loading && !searchedTodos.length && <EmptyTodos />}
      <TodoList>
        {error && <p>Nope, hubo un error</p>}
        {loading && <LoadingTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default App
