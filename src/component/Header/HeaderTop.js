import { Link } from "react-router-dom";
import backarrowIcon from "../../assets/svg/backicon.svg";
const HeaderTop = ({ children, path, text, buttons }) => {
  return (
    <>
      <Link to={path}>
        <div className="flex gap-[1rem] items-center mb-4">
          <img src={backarrowIcon} alt="" />
          <span>Back</span>
        </div>
      </Link>
      <div className="mx-3 flex items-center justify-between">
        <div className="flex gap-[2rem]"><p className="text-[24px] font-semibold ">{text}</p>
      {buttons && buttons}
        </div>
        
        <div className="relative">{children}</div>
      </div>
    </>
  );
};
export default HeaderTop;
