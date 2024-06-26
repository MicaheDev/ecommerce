import Link from "next/link";
import styles from "@/styles/NotFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>No existen resultados.</h2>
      <p className={styles.help}>No se pudo encontrar el recurso solicitado</p>
      <Link className={styles.link} href="/">Volver al inicio</Link>
    </div>
  );
}
