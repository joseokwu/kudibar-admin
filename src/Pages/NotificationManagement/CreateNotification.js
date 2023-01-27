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
import styles from "./styles.module.css";
import { paymentData } from "../../utils/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTop from "../../component/Header/HeaderTop";
import { FlagModal } from "./Modals/FlagModal";
import Settings from "../../component/NotificationManagement/Settings";
import Composition from "../../component/NotificationManagement/Composition";
import styled from "styled-components";

const CreateNotification = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const navigate = useNavigate();
  const handleShowFlag = () => {
    setShowFlag(!showFlag);
  };

  const handleShowFlagModal = () => {
    setShowFlagModal(true);
    setShowFlag(false);
  };

  return (
    <>
      <Wrapper>
        <Settings />
        <Composition />
      </Wrapper>
    </>
  );
};
export default CreateNotification;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
