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

  return (
    <div></div>
  )
}