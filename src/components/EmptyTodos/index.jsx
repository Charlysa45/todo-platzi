import "./EmptyTodos.css"

export const EmptyTodos = () => {
  return (
    <section id="todoEmpty">
      <div id="todoEmpty-content">
        <p>
          Nope, no hay TODOs. <br /> ¿Por qué no creas uno?
        </p>
        <small>Toca el botón de abajo para añadir un nuevo TODO</small>
      </div>
    </section>
  )
}
