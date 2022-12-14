import { useState } from "react";
import { TitleTag } from "../../component/Header/TitleTag";
import WhiteCard from "../../component/WhiteCard";
import { CompanyInfo } from "./TabItem/companyInfo.component";
import { Roles } from "./TabItem/Roles.component";
import { Users } from "./TabItem/Users.component";
import { FaTimes } from "react-icons/fa";
import styles from "./TabItem/styles.module.css";
const Settings = () => {
  const navItem = ["Company Info", "Users", "Roles & Permission"];
  const [navTabs, setNavTabs] = useState("Company Info");

  const changeNav = (nav) => {
    setNavTabs(nav);
  };
  return (
    <>
      <TitleTag title={"Settings"} />
      <WhiteCard>
        <section className="">
          <nav className="w-full flex items-center ">
            {navItem.map((nav, i) => (
              <div
                onClick={() => changeNav(nav)}
                key={i}
                className="my-[0.5rem] mr-[3.5rem] text-[#94969E] cursor-pointer font-[400]"
                style={
                  navTabs === nav
                    ? { color: "green", borderBottom: "1px solid green" }
                    : { color: "#94969E", borderBottom: "1px solid transparent" }
                }
              >
                {nav}
              </div>
            ))}
          </nav>
        </section>
        <section>
          {navTabs === "Company Info" ? (
            <CompanyInfo />
          ) : navTabs === "Users" ? (
            <Users />
          ) : (
            <Roles />
          )}
        </section>
      </WhiteCard>
      <div className="my-6">
        <WhiteCard>
          <div>
            <h3 className="font-[600] text-[22px] text-[#71737E]">Campaign Settings</h3>
          </div>
          <section className="mt-4 flex">
            <div className={`${styles.card} bg-[#C1DCF6]`}>
              <p>Crowdfunding</p>
              <FaTimes />
            </div>
            <div className={`${styles.card} bg-[#EBD6AE]`}>
              <p>Celebration</p>
              <FaTimes />
            </div>
            <div className={`${styles.card} bg-[#B1D9C4]`}>
              <p>Community Contribution</p>
              <FaTimes />
            </div>
            <div className={`${styles.card} bg-[#DFB5B5]`}>
              <p>Friend Games (Betting)</p>
              <FaTimes />
            </div>
          </section>
        </WhiteCard>
      </div>
    </>
  );
};
export default Settings;
