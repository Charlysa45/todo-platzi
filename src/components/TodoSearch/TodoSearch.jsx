import "./TodoSearch.css"

const TodoSearch = ({ searchItem, setSearchItem, loading }) => {
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
        disabled={loading}
      />
    </>
  )
}

export default TodoSearch
