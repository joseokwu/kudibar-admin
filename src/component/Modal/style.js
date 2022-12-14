import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(18, 21, 40, 0.3);
`;

export const ModalWrapper = styled.div`
  width: calc(40%-100px);
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);

  header {
    display: flex;
    width: 100%;
    padding-bottom: 10px;

    img {
      cursor: pointer;
      z-index: 1;
    }
  }

  @media (max-width: 1000px) {
    width: calc(70% - 40px);
  }

  @media (max-width: 800px) {
    width: calc(90% - 40px);
  }
`;
export const Spacer = styled.div`
  flex: 1;
`;
