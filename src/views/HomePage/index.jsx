import { useNavigate } from 'react-router-dom'
import { ChangeAlert } from '../../components/ChangeAlert'
import CreateTodoButton from '../../components/CreateTodoButton/CreateTodoButton'
import { EmptySearchResults } from '../../components/EmptySearchResults'
import { EmptyTodos } from '../../components/EmptyTodos'
import { ErrorTodos } from '../../components/ErrorTodos'
import { LoadingTodos } from '../../components/LoadingTodos'
// import { Modal } from '../../components/Modal/Index'
import TodoCounter from '../../components/TodoCounter/TodoCounter'
// import { TodoForm } from '../../components/TodoForm'
import { TodoHeader } from '../../components/TodoHeader'
import TodoItem from '../../components/TodoItem/TodoItem'
import TodoList from '../../components/TodoList/TodoList'
import TodoSearch from '../../components/TodoSearch/TodoSearch'
import { useTodos } from '../../hooks/useTodos'

export const HomePage = () => {
  const { states, stateUpdaters } = useTodos()
  const navigate = useNavigate()

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchItem,
    searchedTodos,
    // openModal,
  } = states

  const {
    setSearchItem,
    // addTodo,
    completeTodo,
    deleteTodo,
    // setOpenModal,
    sincronizeTodos,
  } = stateUpdaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchItem={searchItem} setSearchItem={setSearchItem} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchItem={searchItem}
        onError={() => <ErrorTodos />}
        onLoading={() => <LoadingTodos />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchItem) => (
          <EmptySearchResults searchItem={searchItem} />
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => {
              navigate(`/edit/${todo.id}`, {
                state: { todo },
              })
            }}
          />
        )}
      </TodoList>

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

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
      />
      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  )
}
