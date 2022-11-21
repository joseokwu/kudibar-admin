import styles from "./layout.module.css";
import brandImg from "../../assets/img/brand.png";
import Header from "../Header/header.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navs } from "../../utils/navData";
const BaseLayout = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);
  const location = useLocation();

  console.log(location.pathname, "current location");
  return (
    <div className={styles.container}>
      <nav
        className={
          styles.sidebar +
          ` border-r border-b border-gray-light p-[16px] md:pr-[44px] ${
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
          {navs.map((navItem, i) => (
            <Link to={navItem.link}>
              <li
                key={i}
                className={
                  styles.nav__item +
                  ` hover:bg hover:bg-hover-color--1 ${
                    location.pathname.includes(navItem.link) ||
                    location.pathname.includes(navItem.link)
                      ? "text-primary bg-[#242637]"
                      : ""
                  }`
                }
              >
                <img src={navItem.icon} alt="" />
                <span> {navItem.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <section className={`${styles.section}`}>
        <Header isCrossed={isCrossed} />
        <main className="py-7 px-10 mt-[56px] md:mt-0 h-screen scroll_hide overflow-scroll">
          {props.children}
        </main>
      </section>
    </div>
  );
};

export default BaseLayout;
