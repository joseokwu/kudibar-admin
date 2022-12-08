import { useState } from "react";
import "./styles.css";

const Tabs = ({ tabItems }) => {
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<div className="Tabs">
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

export default Tabs;
