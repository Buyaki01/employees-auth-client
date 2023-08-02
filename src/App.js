import { Route, Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./components/Layout"
import LinkPage from "./components/LinkPage"
import Unauthorized from "./components/Unauthorized"
import Home from "./components/Home"
import Admin from "./components/Admin"
import Editor from "./components/Editor"
import Missing from "./components/Missing"
import Lounge from "./components/Lounge"
import RequireAuth from "./components/RequireAuth"
import PersistLogin from "./components/PersistLogin"
import Profile from "./components/Profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized/>} />
        
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[1984, 5150]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
