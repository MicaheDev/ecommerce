import styles from "./CategoriesMenu.module.css";

interface CategoriesMenuProps {
  color: string;
}

export default function CategoriesMenu({ color }: CategoriesMenuProps) {
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
    {
      label: "Hogar",
      href: "home",
    },
    {
      label: "Deporte",
      href: "sport",
    },
  ];

  return (
    <ul className={styles.menu}>
      {categories.map((category) => (
        <li key={category.label}>
          <a href={category.href} style={{ color: `var(--${color})` }}>
            {category.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
