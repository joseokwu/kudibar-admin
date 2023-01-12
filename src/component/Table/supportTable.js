import {
	ActionModalSupport,
	StatusTag,
} from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import { StatusBar } from "../componentHelpers/Tags/tag.style";
import { TrazModal } from "../../Pages/TransactionHistory/TrazModal";
import AssignTicketsModal from "../../Pages/Support/AssignTicketsModal.component";
import { useState } from "react";

const SupportTable = ({ users, tableHeader }) => {
	const [assignOpen, setAssignOpen] = useState(false);

	return (
		<div className={styles.table_container}>
			<table className={styles.table_div}>
				<thead className={styles.thead}>
					<tr>
						{tableHeader.map((data) => (
							<th className={styles.tr}>
								<span>{data}</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.tbody}>
					{users.map((user, i) => {
						const { id, sender, date, time, subject, priority, status } = user;
						return (
							<tr key={i}>
								<td>
									<p>#{id}</p>
								</td>
								<td>
									<p>{sender}</p>
								</td>
								<td>
									<p>{date}</p>
								</td>
								<td>
									<p>{time}</p>
								</td>
								<td>
									<p>{subject}</p>
								</td>
								<td>
									<StatusTag
										text={priority}
										bg={
											priority === "urgent"
												? "#39BD78"
												: priority === "low"
												? "#D34646"
												: "#E9A420"
										}
									/>
								</td>
								<td>
									<StatusBar
										bg={
											status === "Pending"
												? "#E9A420"
												: status === "Open"
												? "#39BD78"
												: "#D34646"
										}
									>
										<p>{status}</p>
									</StatusBar>
								</td>
								<td>
									<div className="relative">
										<ActionModalSupport
											id={i}
											link={"/support/details/id"}
											assignFunc={() => setAssignOpen(true)}
										/>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
				<MyPagination />
			</div>
			{assignOpen && (
				<AssignTicketsModal closeModal={() => setAssignOpen(false)} />
			)}
		</div>
	);
};
export default SupportTable;
