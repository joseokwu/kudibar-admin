import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = ({
  solid,
  actionLink,
  title,
  width,
  padding,
  onClick,
  ...props
}) => {
  return (
    <Link to={actionLink}>
      <Btn {...props} onClick={onClick} solid={solid}>
        {title}
      </Btn>
    </Link>
  );
};

const Btn = styled.button`
  background: ${({ solid }) => (solid ? solid : "transparent")};
  color: ${({ solid }) => (solid ? "#fff" : "#1B75BC")};
  border: ${({ solid }) =>
    solid ? "1px solid transparent" : "1px solid #1B75BC"};
  padding: 5px 1.5rem;
  outline: none;
  border-radius: 0.5rem;
`;
