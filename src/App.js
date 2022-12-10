import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaigns from "./Pages/Campaigns";
import Details from "./Pages/Campaigns/Details";
import Dashboard from "./Pages/Dashboard";
import Support from "./Pages/Support";
import AllSupport from "./Pages/Support/AllSupport.component";
import SupportDetails from "./Pages/Support/SupportDetails.component";
import User from "./Pages/User";
import ContributionCampaign from "./Pages/User/ContributionCampaign";
import CampaignDetails from "./Pages/User/CreatedCampaigns/campaignDetails";
import CreatedCampaign from "./Pages/User/CreatedCampaigns/CreatedCampaign";
import InvitedCampaign from "./Pages/User/InvitedCampaign";
import UserDetails from "./Pages/User/UserDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/all" element={<AllSupport />} />
        <Route path="/support/details/id" element={<SupportDetails />} />
        <Route path="/users/user" element={<UserDetails />} />
        <Route path="/campaigns/details" element={<Details />} />
        <Route path="/users/user/created-campaigns" element={<CreatedCampaign />} />
        <Route path="/users/user/invited-campaigns" element={<InvitedCampaign />} />
        <Route path="/users/user/contribution-history" element={<ContributionCampaign />} />
        <Route path="/users/user/campaign-details" element={<CampaignDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
