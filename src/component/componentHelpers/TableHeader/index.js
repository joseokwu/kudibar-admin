import calendarIcon from "../../../assets/svg/calendartransparent.svg";
import searchIcon from "../../../assets/svg/Search.svg";
export const TableHeader = () => {
  return (
    <div className="w-full mt-6 bg-white rounded-[12px] p-4 flex items-center gap-[8px] ">
      <select
        name=""
        id=""
        className="py-[7px] px-[1.5rem] border-[1px] border-[#dbdcdf] rounded-[5px]"
      >
        <option value="">Priority</option>
      </select>
      <select
        name=""
        id=""
        className="py-[7px] px-[1.5rem] border-[1px] border-[#dbdcdf] rounded-[5px]"
      >
        <option value="">Type</option>
      </select>

      <div className=" flex items-center px-[1.5rem] py-[7px] border-[1px] border-[#dbdcdf] rounded-[5px]">
        <span className="mr-3">Created </span>
        <img src={calendarIcon} alt="" />
      </div>

      <section className="w-full flex items-center  gap-[10px] p-[0.3rem] rounded-[10px] bg-[whitesmoke]">
        <img className="pl-[8px]" src={searchIcon} alt="" />
        <input
          className="w-full p-[5px] bg-[transparent] outline-0 border-0"
          type="text"
          placeholder="Search for user, email address"
        />
      </section>
    </div>
  );
};
