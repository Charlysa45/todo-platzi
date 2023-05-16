import { useState } from 'react'

import './TodoForm.css'
import { useNavigate } from 'react-router-dom'

export const TodoForm = (props) => {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = useState(props.defaultTodoText || '')

  const onCancel = () => {
    navigate('/')
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()

    props.submitEvent(newTodoValue)
    navigate('/')
  }
  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.submitText}
        </button>
      </div>
    </form>
  )
}
