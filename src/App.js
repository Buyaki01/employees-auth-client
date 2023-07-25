import { Route, Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./components/Layout"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
      </Route>
    </Routes>
  )
}

export default App
