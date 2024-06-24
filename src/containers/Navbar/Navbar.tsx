"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Menu from "./components/Menu/Menu";
import CategoriesMenu from "./components/CategoriesMenu/CategoriesMenu";
import Search from "./components/Search/Search";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerTop}>
          <Link href="/" className={styles.brand}>
            Tienda Web
          </Link>
          <Menu />
        </div>

        <div className={styles.containerBottom}>
          <CategoriesMenu />
          <Search />
        </div>
      </nav>
    </>
  );
}
