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
import Button from "../../component/Button";
import Input from "../../component/Input";

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

	return (
		<div>
			<div className="my-8">
				<p className="text-[24px] font-semibold">Financial Management</p>
			</div>
			<WhiteCard>
				<Tabs
					tabItems={["Mark Up / Down", "Accounts", "Countries & Currencies"]}
				/>
				<div className="flex flex-row gap-3 justify-between">
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
			</WhiteCard>
			<WhiteCard>
				<div>
					<p className="mb-4">Input Yebora’s Markup/Down Percent</p>
					<div className="flex flex-row items-center justify-between gap-12">
						<Input />
						<Button>Update</Button>
					</div>
				</div>
			</WhiteCard>

			{users.length > 0 ? (
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
			)}
		</div>
	);
};
export default FinancialManagement;
