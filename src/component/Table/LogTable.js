import {
  ActionModal,
  StatusTag,
} from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import actionIcon from "../../assets/svg/actionicon.svg";
import { TrazModal } from "../../Pages/TransactionHistory/TrazModal";
import { useState } from "react";

const LogTable = ({ data, tableHeader, showModal }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
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
          {data.map((value, i) => {
            const { user, date, time, activity } = value;
            return (
              <tr key={i}>
                <td>
                  <p>{user}</p>
                </td>
                <td>
                  <p>{activity}</p>
                </td>
                <td>
                  <p>{date}</p>
                </td>
                <td>
                  <p>{time}</p>
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
export default LogTable;
