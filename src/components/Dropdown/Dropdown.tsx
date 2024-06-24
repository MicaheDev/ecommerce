"use client";

import Link from "next/link";
import { DropdownProps } from "./types";
import styles from "./Dropdown.module.css";

export default function Dropdown({ item, items }: DropdownProps) {
  console.log(items);
  return (
    <ul className={styles.dropdown}>
      <li className={styles.list}>
        {item.href ? (
          <Link href={item.href} className={styles.link}>
            {item.icon}
            <span className={styles.label}>{item.label}</span>
            <input type="checkbox" className={styles.check} />
          </Link>
        ) : (
          <a className={styles.link}>
            {item.icon}
            <span className={styles.label}>{item.label}</span>
            <input type="checkbox" className={styles.check} />
          </a>
        )}
        <div className={styles.content}>
          <ul className={styles.subList}>
            {items?.map((option) => (
              <li className={styles.item} key={option.label}>
                <Link
                  href={option.href}
                  onClick={option.clickEvent}
                  className={styles.anchor}
                >
                  {option.icon}
                  <span className={styles.label}>{option.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
}
