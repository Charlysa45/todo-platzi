import useStorageListener from './useStorageListener'

import './ChangeAlert.css'

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize)
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <h2>¡Alto! ¡Más lento, velocista!</h2>
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Dale!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert }
