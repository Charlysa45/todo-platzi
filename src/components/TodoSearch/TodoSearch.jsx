import { useContext } from "react"
import "./TodoSearch.css"
import { TodoContext } from "../../TodoContext"

const TodoSearch = () => {
  const { searchItem, setSearchItem } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchItem(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        className="TodoSearch"
        placeholder="Cebolla"
        value={searchItem}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export default TodoSearch
