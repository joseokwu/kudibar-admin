import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionContainer, Status, StatusSignal } from "./tag.style";
import eyeIcon from "../../../assets/svg/eyeicon.svg";
import redflagicon from "../../../assets/svg/redflag.svg";
import actionIcon from "../../../assets/svg/actionicon.svg";
export const StatusTag = ({ bg, text }) => {
  return (
    <Status>
      <StatusSignal bg={bg} />
      <span>{text}</span>
    </Status>
  );
};

export const StatusCreatedCampaignTags = ({ bg, text }) => {
  return (
    <Status>
      <StatusSignal bg={bg} />
      <span>{text}</span>
    </Status>
  );
};

export const ActionModal = ({ id, link }) => {
  const [showOption, setShowOption] = useState(false);

  const handleShowOptions = () => {
    setShowOption(!showOption);
  };
  return (
    <>
      <img
        onClick={handleShowOptions}
        className="cursor-pointer"
        src={actionIcon}
        alt="actionbtn"
      />
      {showOption && (
        <ActionContainer className="p-3 bg-white ">
          <Link to={link}>
            <div className="view_display btn" role={"button"} onClick={() => console.log(id)}>
              <span>View</span>
              <img src={eyeIcon} alt="" />
            </div>
          </Link>
          <div className="flag_display btn" role={"button"}>
            <span>Flag</span>
            <img src={redflagicon} alt="" />
          </div>
        </ActionContainer>
      )}
    </>
  );
};
