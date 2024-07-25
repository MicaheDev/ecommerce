"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu, Search } from "./components";
import { CategoriesMenu } from "@/components";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerTop}>
          <Link href="/" className={styles.brand}>
            <span>Tienda</span>
            <span>Web</span>
          </Link>
          <Menu />
        </div>

        <div className={styles.containerBottom}>
          <CategoriesMenu color="black"/>
          <Search />
        </div>
      </nav>
    </>
  );
}
