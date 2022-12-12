import styled from "styled-components";
export const Button = ({ solid, title, width, padding, onClick, ...props }) => {
  return (
    <Btn {...props} onClick={onClick} solid={solid}>
      {title}
    </Btn>
  );
};

const Btn = styled.button`
  background: ${({ solid }) =>
    solid
      ? "linear-gradient(90deg, #1B75BC 25.1%, #29ABE2 81.05%, rgba(43, 182, 119, 0.7921) 124.52%)"
      : "transparent"};
  color: ${({ solid }) => (solid ? "#fff" : "#1B75BC")};
  border: ${({ solid }) => (solid ? "1px solid transparent" : "1px solid #1B75BC")};
  padding: 10px 3rem;
  outline: none;
  border-radius: 2rem;
`;
