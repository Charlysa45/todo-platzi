import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

export function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V2", [])
  const [searchItem, setSearchItem] = useState("")
  // const [openModal, setOpenModal] = useState(false)

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
    const id = newTodoId(todos)
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
      id
    })
    saveTodos(newTodos)
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchItem,
    searchedTodos,
    // openModal,
  }

  const stateUpdaters = {
    setSearchItem,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    // setOpenModal, 
    sincronizeTodos
  }

  return {states, stateUpdaters}
}

function newTodoId(todoList){
  if (!todoList.length) {
    return 1
  }
  const idList = todoList.map((todo) => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1
}