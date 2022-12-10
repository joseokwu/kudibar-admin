import styles from "./TransactionHistory.module.css";
import DashboardCard from "../../component/card/dashboardCard/card.component";
import usericon from "../../assets/svg/users.svg";
import charticon from "../../assets/svg/chart.svg";
import cardicon from "../../assets/svg/cardicon.svg";
import bgVector from "../../assets/svg/Vector.svg";
import bgVector2 from "../../assets/svg/Vector2.png";
import bgVector3 from "../../assets/svg/Vector3.png";
import UserTable from "../../component/User/user.component";
import Chart from "../../component/chart/chart.component";
import WhiteCard from "../../component/WhiteCard";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../component/SearchBar";
import Tabs from "../../component/Tabs";
import MUITable from "../../component/Table";
import { TransactionHistoryData } from "../../utils/users";

const TransactionHistory = () => {
	const navigate = useNavigate();

	const headers = [
		{ label: "Payment ID", key: "payment_id" },
		{ label: "Date", key: "date" },
		{ label: "Amount", key: "amount" },
		{ label: "Type", key: "type" },
		{ label: "Status", key: "status" },
		{ label: "Action", key: "action" },
	];

	return (
		<div>
			<div className="grid grid-cols-4 gap-4 mb-8">
				<DashboardCard
					bgColor={bgVector}
					title={"Total Users"}
					icon={usericon}
					value={"40"}
					bg="#FFF4DE"
				/>
				<DashboardCard
					bgColor={bgVector2}
					title={"Total Campaigns"}
					icon={charticon}
					value={"5"}
					bg={"#D7EAFC"}
				/>
				<DashboardCard
					bgColor={bgVector3}
					title={"Total Commision"}
					icon={cardicon}
					value={"$30k"}
					bg={"#C8FFE2"}
				/>
				<DashboardCard
					bgColor={bgVector3}
					title={"Total Commision"}
					icon={cardicon}
					value={"$30k"}
					bg={"#C8FFE2"}
				/>
			</div>
			<div className="mb-8">
				<WhiteCard>
					<SearchBar />
				</WhiteCard>
			</div>
			<div className="mb-4">
				<WhiteCard>
					<Tabs
						tabItems={[
							"All (2000)",
							"Pending (400)",
							"Failed (200)",
							"Successful (1400)",
						]}
					/>
					<MUITable headers={headers} bodyData={TransactionHistoryData} />
				</WhiteCard>
			</div>
		</div>
	);
};

export default TransactionHistory;
