import { Dispatch, SetStateAction } from "react";
import styles from "./Cart.module.css";
import classNames from "classnames";
import { RiCloseLargeFill } from "react-icons/ri";

type CartProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export default function Cart({ show, setShow }: CartProps) {
  const cartContainer = classNames(styles.container, {
    [styles.expand]: show,
    [styles.reduce]: !show,
  });

  const cartOverlay = classNames(styles.overlay, {
    [styles.show]: show,
    [styles.hide]: !show,
  });

  return (
    <>
      <div className={cartContainer}>
        <button className={styles.btn} onClick={() => setShow(false)}>
          <RiCloseLargeFill size={30} />
        </button>
        <h2>Mis Compras</h2>
      </div>
      <div className={cartOverlay}></div>
    </>
  );
}
