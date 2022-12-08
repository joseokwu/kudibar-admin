import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import CampaignDetails from "./Pages/User/CreatedCampaigns/campaignDetails";
import CreatedCampaign from "./Pages/User/CreatedCampaigns/CreatedCampaign";
import UserDetails from "./Pages/User/UserDetails";
import FinancialManagement from "./Pages/FinancialManagement";
import MainLayout from "./Layouts/MainLayout";

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
					<Route path="/campaigns" element={<></>} />
					<Route path="/financial-management" element={<></>} />
					<Route path="/transaction-history" element={<></>} />
					<Route path="/support" element={<></>} />
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
