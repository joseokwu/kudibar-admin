import {
	ActionModal,
	StatusTag,
} from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
} from "@mui/material";

const MUITable = ({ bodyData, headers }) => {
	const keyList = headers.map((header) => header.key);
	console.log("bodyData", bodyData);

	return (
		<div className={styles.table_container}>
			<Table className={styles.table_div}>
				<TableHead className={styles.thead}>
					<TableRow>
						{headers.map((header) => (
							<TableCell className={styles.tr}>
								<span>{header.label}</span>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody className={styles.tbody}>
					{bodyData.map((row, i) => {
						return (
							<TableRow key={i}>
								{keyList.map((key, ind) => {
									return (
										<TableCell key={ind}>
											<p>{row[key]}</p>
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
				<MyPagination />
			</div>
		</div>
	);
};
export default MUITable;
