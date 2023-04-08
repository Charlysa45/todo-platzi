import { createContext, useState } from "react"
import { useLocalStorage } from "../components/TodoCounter/useLocalStorage"

export const TodoContext = createContext()

export function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])
  const [searchItem, setSearchItem] = useState("")
  const [openModal, setOpenModal] = useState(false)

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

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
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

  const data = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchItem,
    setSearchItem,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  }

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}
