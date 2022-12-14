import { ActionModal, StatusTag } from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import { Link } from "react-router-dom";
const SettingTables = ({ data, tableHeader }) => {
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
          {data.map((data, i) => {
            const { user, email, roles } = data;
            return (
              <tr key={i}>
                <td>
                  <p>{user}</p>
                </td>
                <td>
                  <p>{email}</p>
                </td>
                <td>
                  <p>{roles}</p>
                </td>
                <td>
                  <Link to="/settings/user/details">
                    <p className="text-[#12152899]">View Details</p>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SettingTables;
