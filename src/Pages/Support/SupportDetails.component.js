import { Button } from "../../component/Button";
import BaseLayout from "../../component/Layout";
import backIcon from "../../assets/svg/backicon.svg";
import { useNavigate } from "react-router-dom";
const SupportDetails = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-4 cursor-pointer "
          role={"button"}
          onClick={() => navigate("/support/all")}
        >
          <img src={backIcon} alt="" />
          <span>#1</span>
        </div>
        <div className="flex items-center gap-[1rem]">
          <Button title={"Open Ticket"} solid />
          <Button title={"Close Ticket"} />
        </div>
      </div>
      <div className="my-[1.5rem] w-full rounded-[8px] p-[1rem] bg-[#fff]">
        <p className="font-[400] text-[18px]">
          Status of airtime top-up still pending. Have already been debited.
        </p>
        <div className="flex items-center justify-between text-">
          <div className="text-[16px] font-[300] flex items-center gap-[0.7rem]">
            <p>Jessica Wong</p>
            <span className="w-[5px] bg-[#CCCCCC] h-[5px] flex items-center justify-center rounded-[50%] "></span>
            <p className="text-[ rgba(18, 21, 40, 0.6)]">Mar 20, 2019 23:14</p>
          </div>
          <div>OA</div>
        </div>
      </div>
    </BaseLayout>
  );
};
export default SupportDetails;
