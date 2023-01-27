import styled from "styled-components";
import Setting from "../../assets/svg/Setting.svg";
import Search from "../../assets/svg/Search.svg";
import cancel from "../../assets/svg/cancel.svg";
import { Button } from "../Button";

const Composition = () => {
  const names = [
    "Micheal Kennedy",
    "Micheal Kennedy",
    "Micheal Kennedy",
    "Micheal Kennedy",
  ];

  return (
    <Wrapper>
      <div className="font-bold text-xl">Compose Notification</div>
      <div>
        <div className="box-radio">
          <h3>Notification Type</h3>
          <div className="flex w-full justify-between mt-4">
            <span>
              <input type="radio" /> <label>In-App</label>
            </span>
            <span>
              <input type="radio" /> <label>Push</label>
            </span>
            <span>
              <input type="radio" /> <label>Bulk</label>
            </span>
            <span>
              <input type="radio" /> <label>Individual Alert</label>
            </span>
          </div>
          <input className="text-input" placeholder="Title" />
          <textarea className="text-box" placeholder="Text" rows={10} />
          <Button title={"Send"} solid="#01789A" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Composition;

const Wrapper = styled.section`
  padding: 4rem 4rem;
  width: 100%;
  border-right: 1px solid #e7ebed;

  .box-radio {
    margin-top: 4rem;
    span {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      align-items: center;
      input {
        width: 2rem;
        height: 1.5rem;
        border: 1px solid grey;
        border-radius: 5px;
      }
      label {
        white-space: nowrap;
      }
    }
    .text-input {
      padding: 12px 16px;
      margin-top: 2rem;

      width: 100%;
      height: 3rem;

      background: #ffffff;
      border-radius: 12px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 1;
    }

    .text-box {
      padding: 12px 16px;
      margin-top: 2rem;
      margin-bottom: 2rem;

      width: 100%;

      background: #ffffff;
      border-radius: 12px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 1;
    }
  }
`;
