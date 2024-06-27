import styles from "./CategoriesMenu.module.css"

export default function CategoriesMenu() {
  const categories = [
    {
      label: "Hombre",
      href: "man",
    },
    {
      label: "Mujer",
      href: "woman",
    },
    {
      label: "Bebé",
      href: "baby",
    },
    {
      label: "Niños",
      href: "kids",
    },
  ];

  return (
    <ul className={styles.menu}>
      {categories.map((category) => (
        <li key={category.label}>
          <a href={category.href}>{category.label}</a>
        </li>
      ))}
    </ul>
  );
}
