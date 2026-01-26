export default function AuthForm({
  title,
  children,
  buttonText
}) {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2>{title}</h2>

        {children}

        <button type="submit" style={styles.button}>
          {buttonText}
        </button>
      </form>
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
  },
  button: {
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
}
