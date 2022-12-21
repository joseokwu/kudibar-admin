import styles from "./sidebar.module.css";
import brandImg from "../../assets/img/brand.png";
import Header from "../../component/Header/header.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navs } from "../../utils/navData";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  return (
    <aside
      className={
        styles.sidebar +
        ` border-r border-b border-gray-light p-[19px] md:pr-[34.5px] ${
          showNav ? "block" : "hidden md:block"
        }`
      }
    >
      <img
        className="w-[100px] h-[32px] mb-[40px] ml-[40px] hidden md:block"
        src={brandImg}
        alt=""
      />

      <ul className={styles.nav}>
        {navs.map((navItem, i) =>
          navItem.name === "Logout" ? (
            <div className={styles.nav__item}>
              {" "}
              <img src={navItem.icon} alt="" />
              <span> {navItem.name}</span>
            </div>
          ) : (
            <Link to={navItem.link}>
              <li
                key={i}
                className={
                  styles.nav__item +
                  ` hover:bg hover:bg-hover-color--1 ${
                    (location.pathname.includes(navItem.link) && navItem.link !== "/") ||
                    (location.pathname === "/" && navItem.link === "/")
                      ? "text-primary bg-[#242637]"
                      : ""
                  }`
                }
              >
                <img src={navItem.icon} alt="" />
                <span> {navItem.name}</span>
              </li>
            </Link>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
