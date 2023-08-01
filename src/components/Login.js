import { useRef, useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { Link, useNavigate, useLocation } from "react-router-dom"
import useInput from "../hooks/useInput"
import axios from "../api/axios"

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const userRef = useRef()
  const errRef = useRef()

  const [user, resetUser, userAttribute] = useInput('user', '')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('/auth', 
        JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      const accessToken = response?.data?.accessToken
      const roles = response?.data?.roles

      setAuth({ user, roles, accessToken })

      // setUser('')
      resetUser()
      setPwd('')
      navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
  }

  const togglePersist = () => {
    setPersist(prev => !prev )
  }

  useEffect(() => {
    localStorage.setItem("persist", persist)
  }, [persist])

  return (
    <section>
      <p 
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          { ...userAttribute }
          required
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <button>Sign In</button>

        <div className="persistCheck">
          <input 
            type="checkbox" 
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />

          <label htmlFor="persist">Remain Signed In</label>
        </div>
      </form>

      <p>
        Need an Account? <br />
        <span className="line">
          <Link to={"/register"}>Sign Up</Link>
        </span>
      </p>
    </section>
  )
}

export default Login
