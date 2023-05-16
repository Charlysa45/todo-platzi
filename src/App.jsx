import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./views/HomePage"

import "./App.css"
import { EditPage } from "./views/EditPage"
import { NewTodoPage } from "./views/NewTodoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
