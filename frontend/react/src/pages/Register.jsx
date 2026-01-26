import AuthForm from "../components/AuthForm"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <AuthForm title="Register" buttonText="Register">
      <input type="text" placeholder="Nama" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </AuthForm>
  )
}
