import { Route, Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./components/Layout"
import LinkPage from "./components/LinkPage"
import Unauthorized from "./components/Unauthorized"
import Home from "./components/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized/>} />

        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
