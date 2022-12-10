import { Button } from "../../component/Button";
import BaseLayout from "../../component/Layout";
import { CardsContainer } from "../User/CreatedCampaigns/campaigns.styles";
import { CampaignCard } from "./CampaignCard";
import crowdfundIcon from "../../assets/svg/crowdfunding.svg";
import celebrationIcon from "../../assets/svg/celebrationicon.svg";
import communityIcon from "../../assets/svg/communityicon.svg";
import betIcon from "../../assets/svg/beticon.svg";
import swapIcon from "../../assets/svg/Swap.svg";
import filterIcon from "../../assets/svg/Filter.svg";
import searchIcon from "../../assets/svg/Search.svg";
import { allCampaigns } from "../../utils/users";
import CampaignTable from "../../component/Table/campaignTable";
import { useState } from "react";
import { FlagModal } from "../User/Modals/FlagModal";
const Campaigns = () => {
  const tableNav = ["Public Campaign", "Private Campaign", "Yebora Campaign"];
  const [currentView, setCurrentView] = useState("Public Campaign");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const changeCurrentView = (nav) => {
    setCurrentView(nav);
  };
  const campaignTableHeader = ["Title", "Category", "Creator", "Date", "Status", "Action"];
  return (
    <>
      {showModal && <FlagModal closeModal={() => setShowModal(false)} />}
      <BaseLayout>
        <div className="flex items-center justify-between">
          <h3 className="text-[24px] font-[600]">All Campaigns</h3>
          <Button style={{ padding: "10px 30px" }} title={"Create Campaign"} padding="20px" />
        </div>
        <div className="mt-4">
          <CardsContainer>
            <CampaignCard
              text={"Crowdfunding"}
              color="#328BE0"
              value={"30"}
              img={crowdfundIcon}
              bg="#BDD8F1"
            />
            <CampaignCard
              color="#F9B32E"
              text={"Celebration"}
              value={"21"}
              img={celebrationIcon}
              bg="#F9E3BB"
            />
            <CampaignCard
              text={"Community Contribution"}
              value={"3"}
              img={communityIcon}
              bg="#BFE6D2"
              color="#39BD78"
            />
            <CampaignCard
              color="#D34646"
              text={"Friend's game (Betting)"}
              value={"50"}
              img={betIcon}
              bg="#EDC2C2"
            />
          </CardsContainer>
        </div>
        <section>
          <div className="mt-6 bg-white rounded-[12px] p-4 flex items-center gap-[8px] ">
            <button className="flex items-center justify-center border-[#1215281A]  w-[7rem] py-[5px]  gap-[4px]  border-[1px] rounded-[8px]">
              <img src={swapIcon} alt="" />
              <p> Sort by </p>
            </button>
            <button className="flex items-center justify-center border-[#1215281A]  w-[7rem] py-[5px] gap-[4px]  border-[1px] rounded-[8px]">
              <img src={filterIcon} alt="" />
              <p> Filter </p>
            </button>

            <section className="w-full flex items-center  gap-[10px] p-[0.3rem] rounded-[10px] bg-[whitesmoke]">
              <img className="pl-[8px]" src={searchIcon} alt="" />
              <input
                className="w-full p-[5px] bg-[transparent] outline-0 border-0"
                type="text"
                placeholder="Search for user, email address"
              />
            </section>
          </div>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            <div className="border-b-[1px] px-[5px] pt-[7px] border-[#EDEDEF] flex items-center mb-4 gap-[2rem]">
              {tableNav.map((nav) => (
                <p
                  onClick={() => changeCurrentView(nav)}
                  className="cursor-pointer"
                  style={
                    currentView === nav
                      ? { color: "#39BD78", fontWeight: "600", borderBottom: "2px solid #39BD78" }
                      : { color: "#8C8D96", borderBottom: "1px solid transparent" }
                  }
                >
                  {nav}
                </p>
              ))}
            </div>
            <CampaignTable
              tableHeader={campaignTableHeader}
              campaigns={allCampaigns}
              showModal={handleShowModal}
            />
          </section>
        </section>
      </BaseLayout>
    </>
  );
};
export default Campaigns;
