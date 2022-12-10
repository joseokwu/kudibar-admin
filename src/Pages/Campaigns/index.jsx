import styles from "./Campaigns.module.css";
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
import { CampaignData } from "../../utils/users";
import SearchFilterBar from "../../component/SearchFilterBar";

const Campaigns = () => {
	const headers = [
		{ label: "Title", key: "title" },
		{ label: "Category", key: "category" },
		{ label: "Creator", key: "creator" },
		{ label: "Date", key: "date" },
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
			<div className="mb-4">
				<SearchFilterBar />
			</div>
			<div>
				<WhiteCard>
					<Tabs
						tabItems={[
							"Private Campaigns (20)",
							"Public Campaign (10)",
							"Yebora’s Campaign (2)",
						]}
					/>
					<MUITable headers={headers} bodyData={CampaignData} />
				</WhiteCard>
			</div>
		</div>
	);
};

export default Campaigns;
