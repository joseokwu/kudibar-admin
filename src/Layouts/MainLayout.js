import styles from "./layout.module.css";
import brandImg from "../assets/img/brand.png";
import Header from "../component/Header/header.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navs } from "../utils/navData";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const MainLayout = (props) => {
	const [showNav, setShowNav] = useState(false);
	const [isCrossed, setIsCrossed] = useState(false);
	const location = useLocation();

	console.log(location.pathname, "current location");
	return (
		<div className={styles.container}>
			<Sidebar />
			<section className={`${styles.section}`}>
				<Header isCrossed={isCrossed} />
				<main
					className={`py-7 px-20 mt-[56px] md:mt-0 scroll_hide overflow-scroll ${styles.scrollyBit}`}
				>
					<Outlet />
				</main>
			</section>
		</div>
	);
};

export default MainLayout;
