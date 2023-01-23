import walletIcon from "../../../assets/svg/wallet.svg";
import profileIcon from "../../../assets/svg/profile.svg";
import cardIcon from "../../../assets/svg/creditcardicon.svg";
const Beneficiary = () => {
  return (
    <div>
      <div className="flex items-center gap-[1.4rem] rounded-[8px] p-[1.2rem] bg-[whitesmoke]">
        <div className="w-[45px] uppercase h-[45px] rounded-[50%] flex justify-center items-center text-white bg-[green]">
          C
        </div>
        <div className="mx-[1rem] text-[#888993] font-[500] text-[14px] flex gap-[0.4rem] items-center">
          <img src={profileIcon} alt="" />
          <p>Chinmay Sarasvati</p>
        </div>
        <div className="mx-[1rem] text-[#888993] font-[500] text-[14px]  flex items-center gap-[0.4rem]">
          <img src={walletIcon} alt="" />
          <p>21794938438</p>
        </div>
        <div className="mx-[1rem] text-[#888993] font-[500] text-[14px]  flex gap-[0.4rem] items-center">
          <img src={cardIcon} alt="" />
          <p>Zenith Bank</p>
        </div>
      </div>
    </div>
  );
};
export default Beneficiary;
