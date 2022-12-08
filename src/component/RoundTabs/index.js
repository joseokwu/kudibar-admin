import { useState } from "react";
import "./styles.css";

const RoundTabs = ({ tabItems }) => {
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<div className="RoundTabs">
			{tabItems.map((tabItem, ind) => (
				<div
					className={`tabItem ${currentTab === ind ? "tabItem--current" : ""}`}
					onClick={() => setCurrentTab(ind)}
					key={ind}
				>
					<div className="tabItemText">{tabItem}</div>
					<div className="tabItemLine"></div>
				</div>
			))}
		</div>
	);
};

export default RoundTabs;
