import "./CreateTodoButton.css"

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal((patata) => !patata)
  }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  )
}

export default CreateTodoButton
