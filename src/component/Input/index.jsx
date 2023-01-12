import "./styles.css";

const Input = ({ placeholder = "", type = "text" }) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			name=""
			id=""
			className="Input"
		/>
	);
};

export const CheckBox = () => {
	return (
		<input
			type="checkbox"
			className="border-[1px] border-[#328BE0] accent-[#328BE0] cursor-pointer"
		/>
	);
};

export default Input;
