import { HiChevronDown } from "react-icons/hi";
import styles from "./SelectComponent.module.css";

const SelectComponent = ({ label, icon }) => {
	return (
		<div className={styles.SelectComponent}>
			{label}
			{icon ? icon : <HiChevronDown />}
		</div>
	);
};

export default SelectComponent;
