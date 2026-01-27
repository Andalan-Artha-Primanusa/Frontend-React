import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import { register } from "../services/authService"

export default function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirm) {
      setError("Password tidak sama")
      return
    }

    try {
      await register({ name, email, password })
      navigate("/login")
    } catch (err) {
      console.log("FULL ERROR OBJECT:", error)
      console.log("STATUS:", error.response?.status)
      console.log("HEADERS:", error.response?.headers)
      console.log("DATA:", error.response?.data)
      setError("Register gagal")
    }
  }

  return (
    <AuthForm title="Register" buttonText="Register">
      <form onSubmit={handleSubmit}>
        <input placeholder="Nama" value={name}
          onChange={(e) => setName(e.target.value)} />

        <input placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <input type="password" placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>

      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </AuthForm>
  )
}
