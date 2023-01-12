import { useState } from "react";
import "./styles.css";

const Tabs = ({ tabItems, currentTab, setCurrentTab }) => {
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
