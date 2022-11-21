import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(50, 139, 224, 0.05);
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 800px) {
    margin-bottom: 2rem;
    width: 100%;
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 0.3512rem 3.125rem;
  // max-width: 50%;
  border-radius: 15px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ toggle }) => (toggle ? "#39BD78" : "transparent")};
  color: ${({ toggle }) => (toggle ? "#FFF" : "rgba(18, 21, 40, 0.6)")};
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  @media only screen and (max-width: 800px) {
    // padding: 0.3rem 3rem;
    font-size: 0.6rem;
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
    width: 50%;
  }
`;
