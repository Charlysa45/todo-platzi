import TodoCounter from "./components/TodoCounter/TodoCounter"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"

import "./App.css"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import { useState } from "react"

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Lloar con la llorona", completed: false },
// ]

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1")
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] = useState("")

  const completedTodos = todos.filter((todos) => !!todos.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem("TODOS_V1", stringifiedTodos)
    setTodos(newTodos)
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
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
