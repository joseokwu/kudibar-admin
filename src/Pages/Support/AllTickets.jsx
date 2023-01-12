import styles from "./support.module.css";
import WhiteCard from "../../component/WhiteCard";
import MUITable from "../../component/Table";
import SelectComponent from "../../component/SelectComponent";
import GoBackTop from "../../component/GoBackTop";
import Button from "../../component/Button/button";
import { AiOutlineCalendar } from "react-icons/ai";
import SearchBar from "../../component/SearchBar";
import { allTicketsData } from "../../utils/users";
import { supportData } from "../../utils/users";
import SupportTable from "../../component/Table/supportTable";

const AllTickets = () => {
	const headers = [
		{ label: "ID", key: "id" },
		{ label: "Sender", key: "sender" },
		{ label: "Date", key: "date" },
		{ label: "Time", key: "time" },
		{ label: "Subject", key: "subject" },
		{ label: "Priority", key: "priority" },
		{ label: "Status", key: "status" },
		{ label: "Action", key: "action" },
	];
	const tableHead = [
		"#ID",
		"Sender",
		"Date",
		"Time",
		"Subject",
		"Priority",
		"Status",
		"Action",
	];

	return (
		<div>
			<GoBackTop>
				<Button>New Ticket</Button>
			</GoBackTop>
			<div style={{ marginBottom: "18px" }}>
				<WhiteCard>
					<div className="flex flex-row items-center gap-4 justify-between">
						<SelectComponent label="Priority" />
						<SelectComponent label="Type" />
						<SelectComponent
							label="Created Date"
							icon={<AiOutlineCalendar />}
						/>
						<SearchBar />
					</div>
				</WhiteCard>
			</div>
			<WhiteCard>
				{/* <MUITable headers={headers} bodyData={allTicketsData} /> */}
				<SupportTable tableHeader={tableHead} users={supportData} />
			</WhiteCard>
		</div>
	);
};

export default AllTickets;
