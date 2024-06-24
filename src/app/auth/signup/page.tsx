import Link from "next/link";

export default function SignUp() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: "400px",
      }}
    >
      <h3>Registrarse</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Nombre</label>
        <input style={{ padding: "8px" }} id="name" type="text" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="surname">Apellidos</label>
        <input style={{ padding: "8px" }} id="surname" type="text" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="phone">Telefono</label>
        <input style={{ padding: "8px" }} id="phone" type="text" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email">Correo Electronico</label>
        <input style={{ padding: "8px" }} id="email" type="email" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="password">Contraseña</label>
        <input style={{ padding: "8px" }} id="password" type="password" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="verifyPassword">Verificar Contraseña</label>
        <input style={{ padding: "8px" }} id="verifyPassword" type="password" />
      </div>
      <button
        style={{
          padding: "8px",
          background: "#000",
          color: "#fff",
          fontSize: "1rem",
        }}
        type="submit"
      >
        Registrarse
      </button>
      <Link href="/auth/signin">Inicicar Sesion</Link>
    </form>
  );
}
