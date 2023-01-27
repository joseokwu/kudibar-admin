import { useState } from "react";
import { TitleTag } from "../../component/Header/TitleTag";
import WhiteCard from "../../component/WhiteCard";
import { CompanyInfo } from "./TabItem/companyInfo.component";
import { Roles } from "./TabItem/Roles.component";
import { Users } from "./TabItem/Users.component";
import Email from "./TabItem/Email.component";
import { FaTimes } from "react-icons/fa";
import styles from "./TabItem/styles.module.css";
import Input from "../../component/Input";
import { Button } from "../../component/Button";
import Financials from "../../component/Settings/Financials";
import EmailManagement from "../../component/Settings/EmailManagement";
import AdminUsers from "../../component/Settings/AdminUsers";
const Settings = () => {
  const [currentNav, setCurrentNav] = useState();
  const navItem = ["Company Info", "Users", "Roles & Permission", "Email"];
  const [navTabs, setNavTabs] = useState("Company Info");

  const changeNav = (nav) => {
    setNavTabs(nav);
  };
  return (
    <>
      <TitleTag title={"Settings"} />
      <WhiteCard>
        <section className="w-full flex items-center  gap-[10px] p-[0.3rem] rounded-[10px] pt-6">
          <Button
            title={`Financials`}
            solid={`${currentNav === "financials" ? "#01789A" : ""}`}
            onClick={() => setCurrentNav("financials")}
          />
          <Button
            title={`Email Management`}
            solid={`${currentNav === "email" ? "#01789A" : ""}`}
            onClick={() => setCurrentNav("email")}
          />
          <Button
            title={`Admin Users`}
            solid={`${currentNav === "admin" ? "#01789A" : ""}`}
            onClick={() => setCurrentNav("admin")}
          />
          <Button
            title={`Roles & Permission`}
            solid={`${currentNav === "roles" ? "#01789A" : ""}`}
            onClick={() => setCurrentNav("roles")}
          />
          <Button
            title={`Support`}
            solid={`${currentNav === "support" ? "#01789A" : ""}`}
            onClick={() => setCurrentNav("support")}
          />
        </section>
      </WhiteCard>
      <div className="my-6">
        {currentNav === "financials" && <Financials />}
        {currentNav === "email" && <EmailManagement />}
        {currentNav === "admin" && <AdminUsers />}
      </div>
    </>
  );
};
export default Settings;
