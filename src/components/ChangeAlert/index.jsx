import withStorageListener from "./withStorageListener"

import "./ChangeAlert.css"

const ChangeAlert = ({ show, toggleShow }) => {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
