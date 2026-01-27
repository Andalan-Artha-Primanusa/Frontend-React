import api from "./api"

// ===== AUTH =====

// login
export const login = (data) => {
  return api.post("/login", data)
}

// register
export const register = (data) => {
  return api.post("/register", data)
}

// ambil user login
export const getMe = () => {
  return api.get("/me")
}

// logout
export const logoutApi = () => {
  return api.post("/logout")
}
