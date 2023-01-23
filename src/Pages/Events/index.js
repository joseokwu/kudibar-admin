import BaseLayout from "../../component/Layout";
import swapIcon from "../../assets/svg/Swap.svg";
import filterIcon from "../../assets/svg/Filter.svg";
import searchIcon from "../../assets/svg/Search.svg";
import nouserIcon from "../../assets/svg/nousericon.svg";
import Tables from "../../component/Table/userTable.component";
import { events, users } from "../../utils/users";
import { Button } from "../../component/Button";
const Events = () => {
  const userTableHeader = ["Title", "Type", "Featured", "Promoted", "Date", "Time", "Status", "Action"];

  return (
    <div>
      <div>
        <p className="text-[24px] my-2 font-semibold">Events</p>
        <p className="text-[14px] font-semibold">{users.length} events</p>
      </div>

      {users.length > 0 ? (
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
            
          </div>
          <section className="w-full flex items-center  gap-[10px] p-[0.3rem] rounded-[10px] bg-[whitesmoke] pt-6">
              <Button title={`All Events (${users.length})`} solid={'#01789A'}/>
              <Button title={`Pending Events (${users.length})`}/>
              <Button title={`Approved Events (${users.length})`}/>
              <Button title={`Declined Events (${users.length})`}/>
            </section>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            <Tables tableHeader={userTableHeader} events={events} actionLink="/events/event" />
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
export default Events;
