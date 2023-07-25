import { createContext, useState } from "react"

const AuthContext = createContext({})

// children represent the components inside the AuthProvider
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  
  return (
    // set the values that we are passing for that context
    <AuthContext.Provider value={{ auth, setAuth}}> 
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
