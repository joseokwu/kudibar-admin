import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Campaigns from "./Pages/Campaigns";
import Details from "./Pages/Campaigns/Details";
import Dashboard from "./Pages/Dashboard";
import Support from "./Pages/Support/support";
import AllSupport from "./Pages/Support/AllSupport.component";
import SupportDetails from "./Pages/Support/SupportDetails.component";
import User from "./Pages/User";
import ContributionCampaign from "./Pages/User/ContributionCampaign";
import CampaignDetails from "./Pages/User/CreatedCampaigns/campaignDetails";
import CreatedCampaign from "./Pages/User/CreatedCampaigns/CreatedCampaign";
import InvitedCampaign from "./Pages/User/InvitedCampaign";
import UserDetails from "./Pages/User/UserDetails";
import FinancialManagement from "./Pages/FinancialManagement";
import AllTickets from "./Pages/Support/AllTickets";
import TicketsNotifications from "./Pages/Support/Notifications";
import TransactionHistory from "./Pages/TransactionHistory";
import ViewTicket from "./Pages/Support/ViewTicket";
import Settings from "./Pages/Settings";
import UserSettingDetails from "./Pages/Settings/TabItem/UserDetails.component";
import RolesDetail from "./Pages/Settings/TabItem/RolesDetails.component";
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
					<Route path="/financial-management" element={<></>} />
					<Route path="/transaction-history" element={<TransactionHistory />} />
					<Route path="/support" element={<Support />} />
					<Route path="/support/all-tickets" element={<AllTickets />} />
					<Route path="/support/view-ticket/:id" element={<ViewTicket />} />
					<Route path="/support/all-notif" element={<TicketsNotifications />} />
					<Route path="/settings" element={<Settings />} />
					<Route
						path="/settings/user/details"
						element={<UserSettingDetails />}
					/>
					<Route path="/settings/roles/details" element={<RolesDetail />} />
					<Route path="/campaigns" element={<Campaigns />} />

					<Route path="/users/user" element={<UserDetails />} />
					<Route path="/support/details/:id" element={<ViewTicket />} />
					<Route
						path="/users/user/created-campaigns"
						element={<CreatedCampaign />}
					/>
					<Route
						path="/users/user/campaign-details"
						element={<CampaignDetails />}
					/>
					<Route path="/campaigns/details" element={<Details />} />
					<Route
						path="/users/user/invited-campaigns"
						element={<InvitedCampaign />}
					/>
					<Route
						path="/users/user/contribution-history"
						element={<ContributionCampaign />}
					/>
				</Route>
			</Routes>
		</Router>
	);
	//   return (
	//     <Router>
	//       <Routes>
	//         <Route path="/" element={<Dashboard />} />
	//         <Route path="/users" element={<User />} />
	//         <Route path="/campaigns" element={<Campaigns />} />
	//         <Route path="/support" element={<Support />} />
	//         <Route path="/support/all" element={<AllSupport />} />
	//         <Route path="/support/details/id" element={<SupportDetails />} />
	//         <Route path="/users/user" element={<UserDetails />} />
	//         <Route path="/campaigns/details" element={<Details />} />
	//         <Route path="/users/user/created-campaigns" element={<CreatedCampaign />} />
	//         <Route path="/users/user/invited-campaigns" element={<InvitedCampaign />} />
	//         <Route path="/users/user/contribution-history" element={<ContributionCampaign />} />
	//         <Route path="/users/user/campaign-details" element={<CampaignDetails />} />
	//       </Routes>
	//     </Router>
	//   );
}

export default App;
