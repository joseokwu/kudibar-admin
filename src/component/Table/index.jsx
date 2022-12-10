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
			<Table
				className={styles.table_div}
				sx={{ borderCollapse: "separate", borderSpacing: 0 }}
			>
				<TableHead
					className={styles.thead}
					sx={{
						"& > tr > th": {
							paddingTop: "19px",
							paddingBottom: "24px",
							fontWeight: 600,
							fontSize: "16px",
							lineHeight: "28px",
							borderBottom: "0",
						},
					}}
				>
					<TableRow>
						{headers.map((header) => (
							<TableCell className={styles.tr}>
								<span>{header.label}</span>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody
					className={styles.tbody}
					sx={{
						"& > tr > td": {
							paddingTop: "19px",
							paddingBottom: "25px",
							fontWeight: 600,
							fontSize: "14px",
							lineHeight: "24px",
							borderBottom: "0",
						},

						"& > tr:nth-child(2n+1)": {
							backgroundColor: "transparent",
						},

						"& > tr:nth-child(2n+1) > td": {
							backgroundColor: "#f5f5f5",
						},
						"& > tr > td:first-child": {
							borderTopLeftRadius: "10px",
							borderBottomLeftRadius: "10px",
						},
						"& > tr > td:last-child": {
							borderTopRightRadius: "10px",
							borderBottomRightRadius: "10px",
						},
						"& > tr:first-child td": { borderTopStyle: "solid" },
						"& > tr td:first-child": { borderLeftStyle: "solid" },
					}}
				>
					{bodyData.map((row, i) => {
						return (
							<TableRow key={i} sx={{}}>
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
