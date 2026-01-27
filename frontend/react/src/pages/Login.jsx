import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError("Email atau password salah")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthForm title="Login" buttonText="Login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <p>
        Belum punya akun? <Link to="/register">Register</Link>
      </p>
    </AuthForm>
  )
}
