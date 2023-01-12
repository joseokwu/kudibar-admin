import { useState } from "react";
import BaseLayout from "../../component/Layout";
import swapIcon from "../../assets/svg/Swap.svg";
import filterIcon from "../../assets/svg/Filter.svg";
import searchIcon from "../../assets/svg/Search.svg";
import nouserIcon from "../../assets/svg/nousericon.svg";
import Tables from "../../component/Table/userTable.component";
import MUITable from "../../component/Table";
import Tabs from "../../component/Tabs";
import { users, financeMgtData } from "../../utils/users";
import WhiteCard from "../../component/WhiteCard";
import Button from "../../component/Button/button";
import Input from "../../component/Input";
import { TitleTag } from "../../component/Header/TitleTag";
import styles from "./FinancialManagement.module.css";
import { MdAdd, MdClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Android12Switch from "../../component/ToggleSwitch";
import SelectComponentBig from "../../component/SelectComponentBig";

const FinancialManagement = () => {
	const headers = [
		{ label: "Who Updated", key: "who_update" },
		{ label: "Date of update", key: "date_update" },
		{ label: "Time of update", key: "time_update" },
		{ label: "Current Amount", key: "current_amount" },
	];
	const cards = [
		{ text: "Crowdfunding", bg: "#C1DCF6" },
		{ text: "Celebration", bg: "rgba(249, 178, 46, 0.3)" },
		{ text: "Community Contribution", bg: "rgba(57, 189, 121, 0.3)" },
		{ text: "Friend Games (Betting)", bg: "rgba(211, 70, 70, 0.3)" },
	];
	const actTypes = ["Inflow Account", "Outflow Account"];

	const [currentTab, setCurrentTab] = useState(0);
	const [actType, setActType] = useState(actTypes[0]);

	return (
		<div>
			<TitleTag title="Financial Management" />
			<div className="mb-3">
				<WhiteCard>
					<Tabs
						tabItems={["Mark Up / Down", "Accounts", "Countries & Currencies"]}
						currentTab={currentTab}
						setCurrentTab={setCurrentTab}
					/>
					{currentTab === 0 ? (
						<div
							className="grid gap-3"
							style={{
								gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
							}}
						>
							{cards.map((cardItem) => (
								<div
									className="p-7 rounded-2xl"
									style={{
										background: cardItem.bg,
										color: "#121528",
									}}
								>
									{cardItem.text}
								</div>
							))}
						</div>
					) : currentTab === 1 ? (
						<div>
							<div
								className={`flex flex-row items-center gap-4 ${styles.flowBtns}`}
							>
								{actTypes.map((item, ind) => (
									<button
										className={`${styles.flowBtn} ${
											actType === item ? styles.flowBtnActive : ""
										}`}
										onClick={() => setActType(item)}
										key={ind}
									>
										{item}
									</button>
								))}
							</div>
							<div className={styles.accountgrid}>
								<AccountCard type="details" />
								<AccountCard type="add" />
							</div>
						</div>
					) : (
						<div>
							<p className="mb-4">Accepted Countries</p>
							<div
								className="grid "
								style={{ gridTemplateColumns: "1fr 214px", gap: "46px" }}
							>
								<SelectComponentBig label="Select Country" />
								<Button>Update</Button>
							</div>
							<div className="flex flex-row items-center gap-5 my-5">
								{["Nigeria", "South Africa", "Ghana"].map((item) => (
									<Tag label={item} />
								))}
							</div>
						</div>
					)}
				</WhiteCard>
			</div>
			{currentTab === 0 ? (
				<WhiteCard>
					<div>
						<p className="mb-4">Input Yebora’s Markup/Down Percent</p>
						<div className="flex flex-row items-center justify-between gap-12">
							<Input />
							<Button>Update</Button>
						</div>
					</div>
				</WhiteCard>
			) : currentTab === 2 ? (
				<WhiteCard>
					<p className="mb-4">Accepted Currencies</p>
					<div
						className="grid "
						style={{ gridTemplateColumns: "1fr 214px", gap: "46px" }}
					>
						<SelectComponentBig label="Select Currency" />
						<Button>Update</Button>
					</div>
					<div className="flex flex-row items-center gap-5 my-5">
						{["Naira", "Dollars", "Euros"].map((item) => (
							<Tag label={item} />
						))}
					</div>
				</WhiteCard>
			) : (
				<></>
			)}

			{currentTab === 0 ? (
				users.length > 0 ? (
					<>
						<section className="mt-5 p-4 w-full bg-white rounded-md">
							<MUITable headers={headers} bodyData={financeMgtData} />
						</section>
					</>
				) : (
					<section className="h-[60vh] mt-5 p-4 w-full bg-white rounded-[12px] flex items-center justify-center flex-col ">
						<div className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center bg-[#F5F5F5] ">
							<img src={nouserIcon} alt="" />
						</div>
						<div className="text-[24px] font-semibold mt-3">No User yet</div>
					</section>
				)
			) : (
				<></>
			)}
		</div>
	);
};
export default FinancialManagement;

const AccountCard = ({ type }) => {
	switch (type) {
		case "details":
			return (
				<div
					className={`flex flex-col items-stretch gap-4 ${styles.AccountCard}`}
				>
					<div className={styles.twoCol}>
						<BsThreeDots />
						<Android12Switch />
					</div>
					<div className={styles.twoCol}>
						<p>Zenith Bank PLC</p>
						<p>348594839</p>
					</div>
					<div className={styles.twoCol}>
						<p>Yebora</p>
						<p>DOM</p>
					</div>
				</div>
			);
			break;

		case "add":
			return (
				<div className={`${styles.AccountCard} grid place-items-center`}>
					<MdAdd size={34} color="rgba(18, 21, 40, 0.6)" />
				</div>
			);

		default:
			break;
	}
};

const Tag = ({ label }) => (
	<span className={styles.Tag}>
		{label}
		<MdClose />
	</span>
);
