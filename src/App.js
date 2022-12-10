import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import CampaignDetails from "./Pages/User/CreatedCampaigns/campaignDetails";
import CreatedCampaign from "./Pages/User/CreatedCampaigns/CreatedCampaign";
import UserDetails from "./Pages/User/UserDetails";
import FinancialManagement from "./Pages/FinancialManagement";
import Support from "./Pages/Support";
import AllTickets from "./Pages/Support/AllTickets";
import TicketsNotifications from "./Pages/Support/Notifications";
import TransactionHistory from "./Pages/TransactionHistory";
import ViewTicket from "./Pages/Support/ViewTicket";
import Campaigns from "./Pages/Campaigns";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Dashboard />} />
					<Route
						path="/financial-management"
						element={<FinancialManagement />}
					/>
					<Route path="/users" element={<User />} />
					<Route path="/campaigns" element={<Campaigns />} />
					<Route path="/financial-management" element={<></>} />
					<Route path="/transaction-history" element={<TransactionHistory />} />
					<Route path="/support" element={<Support />} />
					<Route path="/support/all-tickets" element={<AllTickets />} />
					<Route path="/support/view-ticket/:id" element={<ViewTicket />} />
					<Route path="/support/all-notif" element={<TicketsNotifications />} />
					<Route path="/settings" element={<></>} />
				</Route>

				<Route path="/users/user" element={<UserDetails />} />
				<Route
					path="/users/user/created-campaigns"
					element={<CreatedCampaign />}
				/>
				<Route
					path="/users/user/campaign-details"
					element={<CampaignDetails />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
