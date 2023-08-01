import { useAuth0 } from "@auth0/auth0-react"

const LoginAuth0 = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Continue with Google
      </button>
    )
  )
}

export default LoginAuth0