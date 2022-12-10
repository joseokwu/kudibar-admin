import styles from "./support.module.css";
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

const Support = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="grid grid-cols-4 gap-4 mb-10">
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
			<WhiteCard>
				<div className="flex flex-row items-center justify-between mb-6">
					<h5>Recent activity</h5>
					<button
						className={styles.seeMore}
						onClick={() => navigate("/support/all-tickets")}
					>
						See More
					</button>
				</div>
				<div className="flex flex-col items-stretch gap-4">
					{Array(5)
						.fill()
						.map((item) => (
							<RecentActivityBar />
						))}
				</div>
			</WhiteCard>
		</div>
	);
};

export default Support;

export const RecentActivityBar = () => {
	return (
		<div className="bg-[#f5f5f5] rounded-2xl flex flex-row items-center gap-4 pl-8 py-[26px]">
			<div className="w-[52px] h-[52px] grid place-items-center bg-[#39BD78] text-white text-lg rounded-full">
				EL
			</div>
			<div>
				<p
					className="mb-2 text-[#121528] text-base"
					style={{ lineHeight: "22px" }}
				>
					Curtis submitted a new ticket, Lorem ipsum doloret, amet, consectetur
					adipiscifacliqsis (2337)
				</p>
				<p
					className="text-base text-[rgb(18, 21, 40)] text-opacity-60"
					style={{ lineHeight: "22px" }}
				>
					2 hours ago
				</p>
			</div>
		</div>
	);
};
