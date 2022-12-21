import DashboardCard from "../../component/card/dashboardCard/card.component";
import BaseLayout from "../../component/Layout";
import MainLayout from "../../Layouts/MainLayout";
import usericon from "../../assets/svg/users.svg";
import charticon from "../../assets/svg/chart.svg";
import cardicon from "../../assets/svg/cardicon.svg";
import bgVector from "../../assets/svg/Vector.svg";
import bgVector2 from "../../assets/svg/Vector2.png";
import bgVector3 from "../../assets/svg/Vector3.png";
import UserTable from "../../component/User/user.component";
import Chart from "../../component/chart/chart.component";
import PieChart from "../../component/chart/PoeChart";

const Dashboard = () => {
  return (
    <div className=" w-full ">
      <div className="grid grid-cols-3 gap-6">
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
      </div>
      <div className="m-4 flex justify-start">
        <div>
          <UserTable />
        </div>
        <div>
          <Chart />
          <div className="rounded-md p-8 bg-white mx-5 mb-3 w-full">
            <div>
              <p className="font-[600] text-[18px]">Reached by device</p>
              <div className="w-[300px] h-[300px]">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
