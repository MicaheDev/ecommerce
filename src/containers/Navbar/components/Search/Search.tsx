import styles from "./Search.module.css";

export default function Search() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar Productos"
      />
      <button className={styles.btn}>Buscar</button>
    </div>
  );
}
