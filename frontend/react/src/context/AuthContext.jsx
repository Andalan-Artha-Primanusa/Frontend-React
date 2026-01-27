import { createContext, useContext, useEffect, useState } from "react"
import {
  login as loginApi,
  getMe,
  logoutApi,
} from "../services/authService"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loading, setLoading] = useState(true)

  // auto-login saat refresh
  useEffect(() => {
    const initAuth = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const response = await getMe()
        setUser(response.data)
      } catch (err) {
        // token invalid
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [token])

  const login = async (email, password) => {
    const response = await loginApi({ email, password })

    // SESUAIKAN DENGAN RESPONSE API DOC
    const { token, user } = response.data

    localStorage.setItem("token", token)
    setToken(token)
    setUser(user)
  }

  const logout = async () => {
    try {
      await logoutApi()
    } catch (e) {
      // ignore error logout
    }

    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
