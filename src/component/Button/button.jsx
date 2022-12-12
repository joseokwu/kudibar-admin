import "./styles.css";

const Button = ({ variant = "primary", children }) => {
	return <button className={`Button Button--${variant}`}>{children}</button>;
};

export default Button;
