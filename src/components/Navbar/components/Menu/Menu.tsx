import { Cart } from "@/components";
import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import { RiBox3Line, RiHeartLine, RiShoppingBagLine, RiUser3Line } from "react-icons/ri";
import Dropdown from "@/components/Dropdown/Dropdown";
import { AuthContext } from "@/components/AuthProvider/AuthProvider";
import styles from "./Menu.module.css";

type menuItem = {
  label: string;
  icon: ReactNode;
  href: string;
  clickEvent?: () => void;
};

export default function Menu() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { user, setUser } = useContext(AuthContext) || {};

  const dropdownItems = [
    {
      label: "Mi Cuenta",
      href: "/account",
    },
    {
      label: "Cerra Sesion",
      href: "/",
      clickEvent: () => {
        if (setUser) {
          setUser(null);
        }
        localStorage.removeItem("user");
      },
    },
  ];

  const menuItems: menuItem[] = [
    {
      label: "Pedidos",
      icon: <RiBox3Line size={20} />,
      href: "/orders",
    },
    {
      label: "Favoritos",
      icon: <RiHeartLine size={20} />,
      clickEvent: () => setShowFavorites(true),
      href: "",
    },
    {
      label: "0$",
      icon: <RiShoppingBagLine size={20}/>,
      clickEvent: () => setShowCart(true),
      href: "",
    },
  ];

  const renderAccountDropdown = () => {
    if (user && user.isLogged) {
      return (
        <Dropdown
          item={{
            icon: <RiUser3Line size={20} />,
            label: user?.email,
            href: "",
          }}
          items={dropdownItems}
        />
      );
    } else {
      return (
        <Dropdown
          item={{
            icon: <RiUser3Line size={20} />,
            label: "Cuenta",
            href: "/auth/signin",
          }}
        />
      );
    }
  };

  return (
    <>
      <menu className={styles.menu}>
        {renderAccountDropdown()}
        {menuItems.map((item) => {
          if (item.clickEvent) {
            return (
              <button
                className={styles.item}
                onClick={item.clickEvent}
                key={item.label}
              >
                {item.icon}
                <h4 className={styles.label}>{item.label}</h4>
              </button>
            );
          } else {
            return (
              <Link className={styles.item} key={item.label} href={item.href}>
                {item.icon}
                <h4 className={styles.label}>{item.label}</h4>
              </Link>
            );
          }
        })}
      </menu>
      <Cart show={showCart} setShow={setShowCart} />
    </>
  );
}
