import styles from "./TransactionHistory.module.css";
import DashboardCard from "../../component/card/dashboardCard/card.component";
import usericon from "../../assets/svg/users.svg";
import charticon from "../../assets/svg/chart.svg";
import cardicon from "../../assets/svg/cardicon.svg";
import bgVector from "../../assets/svg/Vector.svg";
import bgVector2 from "../../assets/svg/Vector2.png";
import bgVector3 from "../../assets/svg/Vector3.png";
import UserTable from "../../component/User/user.component";
import Chart from "../../component/chart/chart.component";
import WhiteCard from "../../component/WhiteCard";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../component/SearchBar";
import Tabs from "../../component/Tabs";
import MUITable from "../../component/Table";
import swapIcon from "../../assets/svg/Swap.svg";
import filterIcon from "../../assets/svg/Filter.svg";
import searchIcon from "../../assets/svg/Search.svg";
import { TransactionHistoryData } from "../../utils/users";
import { CardsContainer } from "../User/CreatedCampaigns/campaigns.styles";
import { StatCard } from "../User/CreatedCampaigns/StatCard";
import CampaignTable from "../../component/Table/campaignTable";
import TranzTable from "../../component/Table/TransTable";

const TransactionHistory = () => {
  const navigate = useNavigate();
  const header = [
    "Reference Id",
    "Date",
    "Amount",
    "Name",
    "Type",
    "Status",
    "Action",
  ];

  const headers = [
    { label: "Payment ID", key: "payment_id", action: "actions" },
    { label: "Date", key: "date", action: "actions" },
    { label: "Amount", key: "amount", action: "actions" },
    { label: "Type", key: "type", action: "actions" },
    { label: "Status", key: "status", action: "actions" },
    { label: "Action", key: "action", action: "actions" },
  ];

  return (
    <div>
      <div className="my-2">
        <p className="text-[24px] font-semibold">Transaction Management</p>
        <p className="text-[14px] font-semibold">
          {TransactionHistoryData.length} Transactions
        </p>
      </div>

      <div className="mt-6 bg-white rounded-[12px] p-4 flex items-center gap-[8px] my-4 ">
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
        <section></section>
      </div>

      {/* <div className="mb-8">
        <WhiteCard>
          <SearchBar />
        </WhiteCard>
      </div> */}
      <div className="mb-4">
        <WhiteCard>
          <Tabs
            tabItems={[
              "All Transactions (2000)",
              "Payouts (400)",
              "Total Purchased (200)",
              "Promotions (1400)",
            ]}
          />
          {/* <MUITable headers={headers} bodyData={TransactionHistoryData} /> */}
          <TranzTable
            tableHeader={header}
            data={TransactionHistoryData}
            // showModal={handleShowModal}
          />
        </WhiteCard>
      </div>
    </div>
  );
};

export default TransactionHistory;
