import { HiChevronDown } from "react-icons/hi";
import styles from "./SelectComponentBig.module.css";

const SelectComponentBig = ({ label, icon }) => {
	return (
		<div className={styles.SelectComponentBig}>
			{label}
			{icon ? icon : <HiChevronDown />}
		</div>
	);
};

export default SelectComponentBig;
