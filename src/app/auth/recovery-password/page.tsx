import Link from "next/link";

export default function RecoveryPassword() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: "400px",
      }}
    >
      <h3>Recuperar Contraseña</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email">Correo Electronico</label>
        <input style={{ padding: "8px" }} id="email" type="email" />
      </div>
      <button
        style={{
          padding: "8px",
          background: "#000",
          color: "#fff",
          fontSize: "1rem",
        }}
      >
        Enviar
      </button>
      <Link href="/auth/signin">Inicicar Sesion</Link>
    </form>
  );
}
