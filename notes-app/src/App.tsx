import "bootstrap/dist/css/bootstrap.min"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import NewNote from "./NewNote"

function App() {

  return (
    <Container className="my-5">
    <Routes>
      <Route path="/" element={<NewNote />} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </Container>
  )
}

export default App
