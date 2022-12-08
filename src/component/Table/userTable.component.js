import {
	ActionModal,
	StatusTag,
} from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";

const Tables = ({ users, tableHeader }) => {
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
						const { name, phone, email, isActive, gender } = user;
						return (
							<tr key={i}>
								<td>
									<p>{name}</p>
								</td>
								<td>
									<p>{phone}</p>
								</td>
								<td>
									<p>{email}</p>
								</td>
								<td>
									<StatusTag
										text={isActive}
										bg={isActive === "active" ? "green" : "red"}
									/>
								</td>
								<td>
									<p>{gender}</p>
								</td>
								<td>
									<div className="relative">
										<ActionModal id={i} link={"/users/user"} />
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
		</div>
	);
};
export default Tables;
