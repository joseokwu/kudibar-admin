import DashboardCard from "../../component/card/dashboardCard/card.component";
import BaseLayout from "../../component/Layout";
import MainLayout from "../../Layouts/MainLayout";
import usericon from "../../assets/svg/users.svg";
import charticon from "../../assets/svg/chart.svg";
import cardicon from "../../assets/svg/cardicon.svg";
import bgVector from "../../assets/svg/Vector.svg";
import bgVector2 from "../../assets/svg/Vector2.png";
import bgVector3 from "../../assets/svg/Vector3.png";
import cardgreen from "../../assets/svg/cardgreen.svg";
import cardred from "../../assets/svg/cardred.svg";
import chartblue from "../../assets/svg/chartblue.svg";
import usersblue from "../../assets/svg/usersblue.svg";
import usersyellow from "../../assets/svg/usersyellow.svg";
import UserTable from "../../component/User/user.component";
import Chart from "../../component/chart/chart.component";
import PieChart from "../../component/chart/PoeChart";
import LineChart from "../../component/chart/LineChart";
import { StatCard } from "../User/CreatedCampaigns/StatCard";
import Charts2 from "../../component/chart/doughnut.component";

const Dashboard = () => {
  return (
    <div className=" w-full ">
      <h2>General Analytics</h2>
      <div className="grid grid-cols-4 gap-2">
        <StatCard
          icon={usersyellow}
          value={"40"}
          title={"Total Transactions"}
          amount={"$3000"}
        />
        <StatCard
          title={"Total Events"}
          icon={chartblue}
          value={"5"}
          amount={"400"}
        />
        <StatCard
          title={"Total Tickets"}
          icon={cardred}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
        />
        <StatCard
          title={"Total Transactions"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
      </div>
      <h2 className="mt-8">Users</h2>
      <div className="grid grid-cols-4 gap-2">
        <StatCard
          icon={usersyellow}
          value={"40"}
          title={"Active Users"}
          amount={"300"}
        />
        <StatCard
          title={"First Time Ticket Purchase"}
          icon={usersblue}
          value={"5"}
          amount={"400"}
        />
        <StatCard
          title={"Newly Joined"}
          icon={usersblue}
          value={"5"}
          amount={"400"}
        />
      </div>
      <div className="mt-4">
        <Chart height={80} />
        {/* <div className="rounded-md p-8 bg-white mx-5 mb-3 w-full">
          <div>
            <p className="font-[600] text-[18px]">Reached by device</p>
            <div className="w-[280px] h-[300px]">
              <LineChart data={data} />
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="m-4 flex justify-start">
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
      </div> */}

      <h2 className="mt-8">Transactions</h2>
      <div className="grid grid-cols-3 gap-2">
        <StatCard
          title={"Total Transaction"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Successful Transaction"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Failed Transaction"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Pending Transaction"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Abandoned Transaction"}
          icon={cardgreen}
          icon2={usersyellow}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
      </div>

      <h2 className="mt-8">Events</h2>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-2">
          <StatCard
            title={"Approved"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Pending"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Active"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Declined"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Drafted"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Completed"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
        </div>
        <div className="mt-4">
          <Chart height={160} />
        </div>
      </div>
      <h2 className="mt-8">Tickets</h2>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-2">
          <StatCard
            title={"Tickets Generated"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Tickets Issued"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Most Purchased"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Tickets Validated"}
            icon={chartblue}
            value={"5"}
            amount={"400"}
          />
          <StatCard
            title={"Highest Paid Ticket"}
            icon={chartblue}
            icon2={usersyellow}
            value={"5"}
            amount={"400"}
            amount2="200"
            select={true}
          />
        </div>
        <div className="mt-4 h-8">
          <Charts2 />
        </div>
      </div>
      <h2 className="mt-8">Mode Of Payments</h2>
      <div className="grid grid-cols-3 gap-2">
        <StatCard
          title={"Flutterwave"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Paystack"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Bani"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Fincra"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Bank (Virtual Banking)"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Transaction History"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Vouchers (Offline Payment)"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
        <StatCard
          title={"Scan To Pay"}
          icon={cardgreen}
          icon2={cardred}
          value={"5"}
          amount={"400"}
          amount2="300"
          select={true}
        />
      </div>
    </div>
  );
};
export default Dashboard;
