import BaseLayout from "../../component/Layout";
import genderIcon from "../../assets/svg/gendericon.svg";
import actionIcon from "../../assets/svg/actionicon.svg";
import messageIcon from "../../assets/svg/message.svg";
import phoneIcon from "../../assets/svg/phoneicon.svg";
import calendaricon from "../../assets/svg/calendar.svg";
import profileIcon from "../../assets/svg/profile.svg";
import creditcardicon from "../../assets/svg/creditcardicon.svg";
import walletIcon from "../../assets/svg/wallet.svg";
import uparrowIcon from "../../assets/svg/uparrow.svg";
import downarrowIcon from "../../assets/svg/downarrow.svg";
import exclaimIcon from "../../assets/svg/exclaimicon.svg";
import redflagicon from "../../assets/svg/redflag.svg";
import styles from "./styles.module.css";
import { paymentData } from "../../utils/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTop from "../../component/Header/HeaderTop";
import { FlagModal } from "./Modals/FlagModal";

const UserDetails = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const navigate = useNavigate();
  const handleShowFlag = () => {
    setShowFlag(!showFlag);
  };

  const handleShowFlagModal = () => {
    setShowFlagModal(true);
    setShowFlag(false);
  };

  return (
    <>
      {showFlagModal && <FlagModal closeModal={() => setShowFlagModal(false)} />}
      <div>
        <HeaderTop text={"User Details"} path="/users">
          <>
            <img onClick={handleShowFlag} className="cursor-pointer" src={actionIcon} alt="" />
            {showFlag && (
              <div className="w-[10rem] shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)]  rounded-[12px] z-[1] py-3 px-[10px] absolute top-[20px] right-[10px] bg-[#fff]">
                <div
                  onClick={handleShowFlagModal}
                  className="flex items-center justify-around gap-[5px]"
                  role={"button"}
                >
                  <span>Flag</span>
                  <img src={redflagicon} alt="" />
                </div>
              </div>
            )}
          </>
        </HeaderTop>
        <div className="flex flex-start">
          <div className="shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)] rounded-[16px] p-[3rem] my-5 mx-3 bg-[#fff]">
            <div className="flex p-4 items-center justify-center flex-col">
              <div className="mx-4 flex items-center justify-center text-white w-[120px] h-[120px] rounded-[50%] bg-[#328BE0] text-[32px] font-semibold ">
                B
              </div>
              <p className="mt-[1.2rem] text-[20px] font-semibold">Obodo Bright</p>
            </div>
            <hr className="my-3" />
            <div>
              <ul className={styles.ul}>
                <li>
                  <img src={genderIcon} alt="" />
                  <span>Female</span>
                </li>
                <li>
                  <img src={messageIcon} alt="" />
                  <span>obodobright@gmail.com</span>
                </li>
                <li>
                  <img src={phoneIcon} alt="" />
                  <span>09064532135</span>
                </li>
                <li>
                  <img src={calendaricon} alt="" />
                  <span>Joined 12th Dec. 2021</span>
                </li>
              </ul>
            </div>
            <hr className="my-3" />
            <div>
              <ul className={styles.ul}>
                <li>
                  <img src={profileIcon} alt="" />
                  <span>Obodo Bright</span>
                </li>
                <li>
                  <img src={creditcardicon} alt="" />
                  <span>2099581918</span>
                </li>
                <li>
                  <img src={walletIcon} alt="" />
                  <span>Zenith bank</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-5 mx-3">
            <div className="p-[2rem] mb-4 shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)] rounded-[16px] bg-[#fff]">
              <div>
                <h3 className="font-[600] text-[18px] py-[10px]">Campaign Statistics </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => navigate("/users/user/created-campaigns")}
                  className="w-full cursor-pointer  my-2  bg-[#FEF4E0] py-[1rem] px-[0.8rem] rounded-[8px] "
                >
                  <p className="font-[400] text-[16px]">Created Campaigns</p>
                  <span className="font[600] text-[32px] text-[#F9B32E] ">3</span>
                </div>
                <div
                  onClick={() => navigate("/users/user/invited-campaigns")}
                  className="w-full  cursor-pointer  my-2  bg bg-[#E0EEFA] py-[1rem] px-[0.8rem]  rounded-[8px] "
                >
                  <p className="font-[400] text-[16px]">Invited Campaigns </p>
                  <span className="font[600] text-[32px] text-[#328BE0] ">3</span>
                </div>
                <div
                  onClick={() => navigate("/users/user/contribution-history")}
                  className="w-full cursor-pointer   my-2  bg bg-[#E1F5EB] py-[1rem] px-[0.8rem]  rounded-[8px] "
                >
                  <p className="font-[400] text-[16px]">Contribution & Donation Campaigns</p>
                  <span className="font[600] text-[32px] text-[#39BD78] ">3</span>
                </div>
                <div className="w-full  my-2  bg bg-[#F8E3E3] py-[1rem] px-[0.8rem]  rounded-[8px] ">
                  <p className="font-[400] text-[16px]">Pledges</p>
                  <span className="font[600] text-[32px] text-[#D34646] ">43</span>
                </div>
              </div>
            </div>
            <div className="p-[2rem] mb-4 shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)] rounded-[16px] bg-[#fff] mb-4 shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)] rounded-[16px] bg-[#fff]">
              <div className="flex justify-between items-center">
                <h3 className="font-[600] text-[18px] py-[10px]">Recent transactions </h3>
                <span className="font-[400] cursor-pointer text-[#328BE0] text-[18px] ">
                  {" "}
                  View all
                </span>
              </div>
              <div>
                {paymentData.map((payment) => {
                  const { title, isPaymentType, date, amount } = payment;
                  return (
                    <section
                      className={`${styles.tranzact} flex my-3 justify-between items-center p-[0.5rem] border- `}
                    >
                      <div className="flex gap-[12px] items-center">
                        <>
                          {isPaymentType === "credit" ? (
                            <p className="w-[35px] h-[35px] rounded-[50%] border-[1px] border-[#48BB78] flex justify-center items-center">
                              <img src={uparrowIcon} alt="" />
                            </p>
                          ) : isPaymentType === "debit" ? (
                            <p className="w-[35px] h-[35px] rounded-[50%] border-[1px] border-[#D34646] flex justify-center items-center">
                              <img src={downarrowIcon} alt="" />
                            </p>
                          ) : (
                            <p className="w-[35px] h-[35px] rounded-[50%] border-[1px] border-[#12152833] flex justify-center items-center">
                              <img src={exclaimIcon} alt="" />
                            </p>
                          )}
                        </>

                        <div>
                          <h3>{title}</h3>
                          <span className="text-[#12152899] font-[300] text-[14px]">{date}</span>
                        </div>
                      </div>
                      {isPaymentType === "credit" ? (
                        <div className="text-[#48BB78]">+${amount}</div>
                      ) : isPaymentType === "debit" ? (
                        <div className="text-[#D34646]">-${amount}</div>
                      ) : (
                        <div className="text-[#F9B32E]">Pending</div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
