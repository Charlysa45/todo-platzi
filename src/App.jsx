import TodoCounter from './components/TodoCounter/TodoCounter'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import TodoList from './components/TodoList/TodoList'
import TodoItem from './components/TodoItem/TodoItem'

import './App.css'
import TodoSearch from './components/TodoSearch/TodoSearch'

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a react', completed: false },
  { text: 'Lloar con la llorona', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
