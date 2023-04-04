import TodoCounter from './components/TodoCounter/TodoCounter'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import TodoList from './components/TodoList/TodoList'
import TodoItem from './components/TodoItem/TodoItem'

import './App.css'
import TodoSearch from './components/TodoSearch/TodoSearch'
import { useState } from 'react'
import { useLocalStorage } from './components/TodoCounter/useLocalStorage'

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Lloar con la llorona", completed: false },
// ]

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searchItem, setSearchItem] = useState('')

  const completedTodos = todos.filter((todos) => !!todos.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchItem.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchItem.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchItem={searchItem} setSearchItem={setSearchItem} />
      <TodoList>
        {error && <p>Nope, hubo un error</p>}
        {loading && <p>Cargando ando...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}
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
      <CreateTodoButton />
    </>
  )
}

export default App
