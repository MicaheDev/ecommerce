import { Slider } from "@/components";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.discount}>
        <h3>SALE - Hasta 50% de descuento</h3>
        <p>Nuevos artículos añadidos</p>
      </div>
      <Slider />
    </section>
  );
}
