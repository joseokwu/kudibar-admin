import React, { useState } from "react";
import HeaderTop from "../../../component/Header/HeaderTop";
import BaseLayout from "../../../component/Layout";
import { Link } from "react-router-dom";
import { StatCard } from "./StatCard";
import { CardsContainer } from "./campaigns.styles";
import Analytics from "../navSection/Analytics.screen";
import Members from "../navSection/Members.screen";
import Beneficiary from "../navSection/Beneficiary.screen";
import Rules from "../navSection/Rules.screen";
const CampaignDetails = () => {
  const navItem = ["Analytics", "Members", "Beneficiaries", "Rules"];
  const [navTabs, setNavTabs] = useState("Analytics");

  const changeNav = (nav) => {
    setNavTabs(nav);
  };
  return (
    <>
      <HeaderTop text={"Arthur’s Wedding Contribution"} path={"/users/user/created-campaigns"}>
        <div className="text-[#328BE0] underline">
          <Link>View full details</Link>
        </div>
      </HeaderTop>
      <section>
        <CardsContainer>
          <StatCard
            pr="0"
            pt="0"
            title={"No. Of Contributors"}
            backgroundSVG={"/asset/orange-card.png"}
            amount={"40"}
          />
          <StatCard
            pr="0"
            pt="0"
            title={"Total Amount Contributed"}
            backgroundSVG={"/asset/blue-card.png"}
            amount={"$2000"}
          />

          <StatCard
            pr="0px"
            pb="0"
            title={"No. Of Pledges"}
            backgroundSVG={"/asset/green-card.png"}
            amount={"88"}
          />

          <StatCard
            pr="0"
            pb="0"
            title={"Total Amount Pledges"}
            backgroundSVG={"/asset/pink-card.png"}
            amount={"$3000"}
          />
        </CardsContainer>
      </section>
      <section className="w-full p-[1.5rem] bg-[white] rounded-[12px] mt-[1rem]">
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
        <div className="my-[2rem]">
          {navTabs === "Analytics" ? (
            <Analytics />
          ) : navTabs === "Members" ? (
            <Members />
          ) : navTabs === "Rules" ? (
            <Rules />
          ) : navTabs === "Beneficiaries" ? (
            <Beneficiary />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};
export default CampaignDetails;
