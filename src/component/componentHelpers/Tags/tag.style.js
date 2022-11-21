import styled from "styled-components";

export const ActionContainer = styled.div`
  width: 10.825rem;
  padding: 0.8rem;
  background: #fff;
  border-radius: 12px;
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 0px;
  .btn {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .view_display {
    background-color: whitesmoke;
  }
  .flag_display {
    background: #fff;
  }
`;

export const Status = styled.div`
  padding: 0.3rem 0;
  border: 1px solid #1215281a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 4px;

  span {
    color: #12152899;
  }
`;

export const StatusSignal = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
`;
