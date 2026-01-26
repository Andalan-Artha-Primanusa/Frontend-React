import AuthForm from "../components/AuthForm"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <AuthForm title="Login" buttonText="Login">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <p>
        Belum punya akun? <Link to="/register">Register</Link>
      </p>
    </AuthForm>
  )
}
