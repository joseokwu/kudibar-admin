import styled from "styled-components";
import Setting from "../../assets/svg/Setting.svg";
import Search from "../../assets/svg/Search.svg";
import cancel from "../../assets/svg/cancel.svg";

const Settings = () => {
  const names = [
    "Micheal Kennedy",
    "Micheal Kennedy",
    "Micheal Kennedy",
    "Micheal Kennedy",
  ];

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <span className="flex gap-2">
          <img src={Setting} alt="icon" />
          <h2>Settings</h2>
        </span>
        <p>Which type of email would you like to send </p>
      </div>
      <div>
        <div className="box-checkbox">
          <span className="flex justify-between">
            <h3>One Time Message</h3> <input type="checkbox" />
          </span>
          <p className="mt-4">
            Send a one-time email to your contacts. Send the email right away or
            schedule for later.
          </p>
        </div>
        <div className="box-checkbox">
          <span className="flex justify-between">
            <h3>Automated Message</h3> <input type="checkbox" />
          </span>
          <p className="mt-4">
            Automatically send an email after an event like registration.
          </p>
        </div>
      </div>
      <div className="box-radio">
        <h3>Send Message To</h3>
        <div className="grid grid-cols-2 mt-2">
          <span>
            <input type="radio" /> <label>All Users</label>
          </span>
          <span>
            <input type="radio" /> <label>General Users</label>
          </span>
          <span>
            <input type="radio" /> <label>Kudibar Users</label>
          </span>
          <span>
            <input type="radio" /> <label>Custom Users</label>
          </span>
        </div>
        <section className="w-full flex items-center  gap-[10px] p-[0.3rem] mt-2 rounded-[10px] bg-[whitesmoke] border border-[#01789A]">
          <img className="pl-[8px]" src={Search} alt="" />
          <input
            className="w-full p-[5px] bg-[transparent] outline-0 border-0"
            type="text"
          />
        </section>
        <div className="names">
          {names.map((name, i) => {
            return (
              <span>
                <p>{name} </p> <img src={cancel} alt="cancel" />
              </span>
            );
          })}
        </div>

        <span className="more">+24more</span>
      </div>
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.section`
  padding: 4rem 4rem;
  width: 100%;
  border-right: 1px solid #e7ebed;
  .box-checkbox {
    margin-top: 2rem;
    background-color: #ffffff;
    border: 1px solid #e7ebed;
    border-radius: 12px;
    padding: 1rem 1rem;

    h3 {
      color: #2d2d35;
    }
    input {
      /* padding: 0.5rem; */
    }
  }

  .box-radio {
    margin-top: 2rem;
    span {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      input {
        width: 20%;
        height: 1.5rem;
        border: 1px solid grey;
        border-radius: 5px;
      }
    }
    .names {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
      span {
        display: inline-flex;
        gap: 0.5rem;
        padding: 0.25rem 1rem;
        border: 1px solid #e7ebed;
        border-radius: 16px;
      }
    }
    .more {
      margin-left: 40%;
      color: #787aff;
    }
  }
`;
