import "./styles.css";

const Button = ({ variant = "primary", children, ...props }) => {
  return (
    <button {...props} className={`Button Button--${variant}`}>
      {children}
    </button>
  );
};

export default Button;
