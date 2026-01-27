export default function AuthForm({ title, children }) {
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },
  form: {
    width: "320px",
    padding: "24px",
    background: "#fff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }
}
