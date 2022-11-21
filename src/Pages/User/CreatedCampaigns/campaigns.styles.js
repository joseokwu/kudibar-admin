import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 800px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: nowrap;
    grid-gap: 5px 30px;
    // gap: 0.3rem;
    // display: none;
  }
`;
