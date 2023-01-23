import styled from "styled-components";
export const ButtonOutline = ({ solid,color, title, width, padding, onClick, ...props }) => {
  return (
    <Btn {...props} onClick={onClick} solid={solid} color={color}>
      {title}
    </Btn>
  );
};

const Btn = styled.button`
  background: ${({ solid }) =>
    solid
      ? "linear-gradient(90deg, #1B75BC 25.1%, #29ABE2 81.05%, rgba(43, 182, 119, 0.7921) 124.52%)"
      : "transparent"};
  color: ${({ color }) => (color ? color : "#fff")};
  border: ${({ color }) => (color ? `1px solid ${color}` : "1px solid #1B75BC")};
  padding: 5px 1.5rem;
  outline: none;
  border-radius: 0.5rem;
`;
