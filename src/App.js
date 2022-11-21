import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import CampaignDetails from "./Pages/User/CreatedCampaigns/campaignDetails";
import CreatedCampaign from "./Pages/User/CreatedCampaigns/CreatedCampaign";
import UserDetails from "./Pages/User/UserDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/user" element={<UserDetails />} />
        <Route path="/users/user/created-campaigns" element={<CreatedCampaign />} />
        <Route path="/users/user/campaign-details" element={<CampaignDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
