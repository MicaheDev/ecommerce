"use client";

import { AuthContext } from "@/components/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext) || {};


  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validateEmail = email === "ishigod290302@gmail.com";
    const validatePassword = password === "1234";

    if (validateEmail && validatePassword) {
      const userData = { email, isLogged: true };

      localStorage.setItem("user", JSON.stringify(userData));
      if (setUser) {
        setUser(userData)
      }      
      router.replace("/");
      
    } else {
      router.replace("/auth/signin");
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: "400px",
      }}
    >
      <h3>Iniciar Sesion</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email">Correo Electronico</label>
        <input
          style={{ padding: "8px" }}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="password">Contraseña</label>
        <input
          style={{ padding: "8px" }}
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
        Iniciar Sesion
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/auth/signup">Registrarme</Link>
        <Link href="/auth/recovery-password">Olvide mi contraseña</Link>
      </div>
    </form>
  );
}
