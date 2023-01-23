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
import editflagicon from "../../assets/img/edit.png";
import deleteicon from "../../assets/img/deleteIcon.png";
import yellowflag from "../../assets/img/yellowflag.png";
import redIcon from "../../assets/svg/redtransaction.svg";
import yellowIcon from "../../assets/svg/yellowtransaction.svg";
import styles from "./styles.module.css";
import { paymentData } from "../../utils/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTop from "../../component/Header/HeaderTop";
import { FlagModal } from "./Modals/FlagModal";
import { Button } from "../../component/Button";
import { ButtonOutline } from "../../component/ButtonOutline";
import WhiteCard from "../../component/WhiteCard";
import Tabs from "../../component/Tabs";
import SelectComponentBig from "../../component/SelectComponentBig";
import { CardsContainer } from "../User/CreatedCampaigns/campaigns.styles";
import { StatCard } from "../User/CreatedCampaigns/StatCard";
import UserCard from "../../component/User/usercard.component";
import { userData2 } from "../../utils/userdata";
import Tables from "../../component/Table/userTable.component";
import { users } from "../../utils/users";
import VideoBox from "../../component/Events/VideoBox";

const EventDetails = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [actType, setActType] = useState();

  const [approveOpen, setApproveOpen] = useState(false);
  const navigate = useNavigate();
  const handleShowFlag = () => {
    setShowFlag(!showFlag);
  };

  const handleShowFlagModal = () => {
    setShowFlagModal(true);
    setShowFlag(false);
  };

  const userTableHeader = ["Name", "Phone Number", "Email", "Gender"];

  return (
    <>
      {showFlagModal && (
        <FlagModal closeModal={() => setShowFlagModal(false)} />
      )}
      <div>
        <HeaderTop
          text={"Arthur’s Wedding Contribution"}
          buttons={
            <div className="flex gap-[2rem]">
              <ButtonOutline title={"promoted"} color="#39BD78" />
              <ButtonOutline title={"featured"} color={"#01789A"} />
            </div>
          }
          path="/events"
        >
          <>
            <img
              onClick={handleShowFlag}
              className="cursor-pointer"
              src={actionIcon}
              alt=""
            />
            {showFlag && (
              <div className="w-[10rem] shadow-[0px 4px 20px rgba(27, 117, 188, 0.04)]  rounded-[12px] z-[1] py-3 px-[10px] absolute top-[20px] right-[10px] bg-[#fff]">
                <div
                  onClick={handleShowFlagModal}
                  className="flex items-center justify-around gap-[5px]"
                  role={"button"}
                >
                  <span>Edit Event</span>
                  <img src={editflagicon} alt="" />
                </div>
                <div
                  onClick={handleShowFlagModal}
                  className="flex items-center justify-around gap-[5px]"
                  role={"button"}
                >
                  <span className="text-yellow-400">Flag Event</span>
                  <img src={yellowflag} alt="" />
                </div>
                <div
                  onClick={handleShowFlagModal}
                  className="flex items-center justify-around gap-[5px]"
                  role={"button"}
                >
                  <span className="text-red-600">Trash Event</span>
                  <img src={deleteicon} alt="" />
                </div>
              </div>
            )}
          </>
        </HeaderTop>
        <div className="my-8">
          <CardsContainer>
            <StatCard pr="0" pt="0" title={"Visits"} amount={"$3000"} />
            <StatCard pr="0" pt="0" title={"Interested"} amount={"$2000"} />

            <StatCard pr="0px" pb="0" title={"Subscribers"} amount={"$88"} />

            <StatCard pr="0" pb="0" title={"Sales"} amount={"$3000"} />
          </CardsContainer>
        </div>
        <div className="my-8">
          <WhiteCard>
            <Tabs
              tabItems={[
                "Details",
                "Transactions",
                "Subscribers",
                "Guest List",
              ]}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            {currentTab === 0 ? (
              <VideoBox />
            ) : currentTab === 1 ? (
              <div>
                <div className="flex items-center justify-between">
                  <CardsContainer>
                    <StatCard
                      pr="0"
                      pt="0"
                      title={"Total Transactions"}
                      amount={"$3000"}
                      icon={redIcon}
                    />
                    <StatCard
                      pr="0"
                      pt="0"
                      title={"Total Users"}
                      amount={"$2000"}
                      icon={yellowIcon}
                    />
                  </CardsContainer>
                  <select className="text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#328BE0]">
                    <option value="">Weekly</option>
                    <option value="Most Recent">
                      <input type="radio" />
                      Weekly
                    </option>
                    <option value="Most Recent">Yearly</option>
                    <option value="Most Recent">Monthly</option>
                    <option value="Most Recent">Daily</option>
                  </select>
                </div>
                <div className="w-full mt-10">
                  {userData2.map((data, i) => (
                    <div className={`${styles.user_card}`}>
                      {/* <UserCard key={i} data={data} /> */}
                      <div
                        className={` flex items-center space-between gap-[15rem] my-[5px] text-[16px] rounded-[12px] px-[1.3rem] py-[0.9rem] `}
                        key={i}
                      >
                        <div className="flex items-center gap-[2rem]">
                          {" "}
                          <span className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center bg-[green] text-white ">
                            C
                          </span>
                          <span>
                            <h3 className="text-[18px]">{data.name}</h3>{" "}
                            <p className="text-[14px]">
                              {data.date} at {data.time}
                            </p>{" "}
                          </span>
                        </div>

                        <span>
                          <h3 className="text-[18px]">{data.tx}</h3>{" "}
                          <p className="text-[14px]">Reference Number</p>{" "}
                        </span>
                        <span>
                          <h3 className="text-[18px] text-green-300">
                            {data.amount}
                          </h3>{" "}
                          <p className="text-[14px]">Amount</p>{" "}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentTab === 2 ? (
              <div>
                <div className="flex items-center">
                  <div className="">
                    <CardsContainer>
                      <StatCard
                        pr="0"
                        pt="0"
                        title={"Total Transactions"}
                        amount={"$3000"}
                        icon={redIcon}
                      />
                      <StatCard
                        pr="0"
                        pt="0"
                        title={"Total Users"}
                        amount={"$2000"}
                        icon={yellowIcon}
                      />
                    </CardsContainer>
                  </div>

                  <div className="flex">
                    <select className=" text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#328BE0] mr-4">
                      <option value="">USD</option>
                      <option value="Most Recent">
                        <input type="radio" />
                        Weekly
                      </option>
                      <option value="Most Recent">Yearly</option>
                      <option value="Most Recent">Monthly</option>
                      <option value="Most Recent">Daily</option>
                    </select>
                    <select className=" text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#328BE0]">
                      <option value="">Weekly</option>
                      <option value="Most Recent">
                        <input type="radio" />
                        Weekly
                      </option>
                      <option value="Most Recent">Yearly</option>
                      <option value="Most Recent">Monthly</option>
                      <option value="Most Recent">Daily</option>
                    </select>
                  </div>
                </div>
                <div className="w-full mt-10">
                  {userData2.map((data, i) => (
                    <div className={`${styles.user_card}`}>
                      {/* <UserCard key={i} data={data} /> */}
                      <div
                        className={` flex items-center space-between gap-[15rem] my-[5px] text-[16px] rounded-[12px] px-[1.3rem] py-[0.9rem] `}
                        key={i}
                      >
                        <div className="flex items-center gap-[2rem]">
                          {" "}
                          <span className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center bg-[green] text-white ">
                            C
                          </span>
                          <span>
                            <h3 className="text-[18px]">{data.name}</h3>{" "}
                            <p className="text-[14px]">
                              {data.date} at {data.time}
                            </p>{" "}
                          </span>
                        </div>

                        <span>
                          <h3 className="text-[18px]">{data.tx}</h3>{" "}
                          <p className="text-[14px]">Ticket Number</p>{" "}
                        </span>
                        <span>
                          <h3 className="text-[18px] text-green-300">
                            {data.amount}
                          </h3>{" "}
                          <p className="text-[14px]">Ticket Amount</p>{" "}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <section className="mt-5 p-4 w-full bg-white rounded-md">
                <Tables
                  tableHeader={userTableHeader}
                  guests={users}
                  actionLink="/users/user"
                />
              </section>
            )}
          </WhiteCard>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
