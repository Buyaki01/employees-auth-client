import { useRef, useState, useEffect } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


//requires a string that starts with a letter, followed by a combination of letters, digits, hyphens, and underscores, with a total length between 3 and 23 characters
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/ 

// validates whether the password contains at least one lowercase letter, one uppercase letter, one special character, and has a total length between 8 and 24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>

      <h1>Register</h1>

      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"} // Used in conjunction with the validName state variable and the USER_REGEX validation to convey to the screen reader whether the username input is valid or invalid
          aria-describedby="uidnote" //This attribute points to an element with the ID "uidnote" which likely contains additional information or an error message related to the username input
          onFocus={() => setUserFocus(true)} // Used to detect when the user focuses on the username input field, and it updates the state variable userFocus to true
          onBlur={() => setUserFocus(false)} //The onBlur event is a special event that occurs when the user clicks or moves away from the username input field, effectively "blurring" it or losing focus
        />

        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </form>
    </section>
  )
}