import { ActionModal, StatusTag } from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import actionIcon from "../../assets/svg/actionicon.svg";
import { TrazModal } from "../../Pages/TransactionHistory/TrazModal";
import { useState } from "react";

const TranzTable = ({ data, tableHeader, showModal }) => {
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
            const { payment_id, amount, type, date, status } = value;
            return (
              <tr key={i}>
                <td>
                  <p>{payment_id}</p>
                </td>
                <td>
                  <p>{date}</p>
                </td>
                <td>
                  <p>{amount}</p>
                </td>
                <td>
                  <p>{type}</p>
                </td>

                <td>
                  <StatusTag
                    text={status}
                    bg={
                      status === "Failed"
                        ? "#D34646"
                        : status === "Successful"
                        ? "#39BD78"
                        : "#F9B32E"
                    }
                  />
                </td>

                <td>
                  <div className="relative cursor-pointer">
                    <span className="underline text-[#328BE0] " role="button" onClick={openModal}>
                      View
                    </span>
                    {open && <TrazModal closeModal={() => setOpen(false)} />}
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
export default TranzTable;
