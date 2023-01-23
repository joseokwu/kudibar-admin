import HeaderTop from "../../../component/Header/HeaderTop";
import BaseLayout from "../../../component/Layout";
import swapIcon from "../../../assets/svg/Swap.svg";
import filterIcon from "../../../assets/svg/Filter.svg";
import searchIcon from "../../../assets/svg/Search.svg";
import { createdCampaign } from "../../../utils/users";
import nouserIcon from "../../../assets/svg/nousericon.svg";
import CreatedCampaignTable from "../../../component/Table/createdCampaignTable";
const CreatedCampaign = () => {
  const userTableHeader = ["Title", "Type", "Date", "Time", "Status", "Action"];
  return (
    <div>
      <HeaderTop text={"Created Campaign"} path="/users/user" />

      {createdCampaign.length > 0 ? (
        <>
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
            <section></section>
          </div>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            <CreatedCampaignTable tableHeader={userTableHeader} campaigns={createdCampaign} />
          </section>
        </>
      ) : (
        <section className="h-[60vh] mt-5 p-4 w-full bg-white rounded-[12px] flex items-center justify-center flex-col ">
          <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center bg-[#F5F5F5] ">
            <img src={nouserIcon} alt="" />
          </div>
          <div className="text-[24px] font-semibold mt-3">No User yet</div>
        </section>
      )}
    </div>
  );
};
export default CreatedCampaign;
