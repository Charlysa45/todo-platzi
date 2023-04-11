import TodoCounter from "./components/TodoCounter/TodoCounter"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"
import { Modal } from "./components/Modal/Index"
import { useTodos } from "./hooks/useTodos"
import { TodoForm } from "./components/TodoForm"

import "./App.css"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import { LoadingTodos } from "./components/LoadingTodos"
import { EmptyTodos } from "./components/EmptyTodos"
import { ErrorTodos } from "./components/ErrorTodos"
import { TodoHeader } from "./components/TodoHeader"

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
    addTodo,
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchItem={searchItem} setSearchItem={setSearchItem} />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <ErrorTodos />}
        onLoading={() => <LoadingTodos />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      

      {/* <TodoList>
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {error && <ErrorTodos />}
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
      </TodoList> */}

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default App
