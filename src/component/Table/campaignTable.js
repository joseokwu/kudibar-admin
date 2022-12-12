import { ActionModal, StatusTag } from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";

const CampaignTable = ({ campaigns, tableHeader, showModal }) => {
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
          {campaigns.map((campaign, i) => {
            const { title, category, creator, date, status } = campaign;
            return (
              <tr key={i}>
                <td>
                  <p>{title}</p>
                </td>
                <td>
                  <p>{category}</p>
                </td>
                <td>
                  <p>{creator}</p>
                </td>

                <td>
                  <p>{date}</p>
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
                  <div className="relative">
                    <ActionModal id={i} link="/campaigns/details" onClick={showModal} />
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
export default CampaignTable;
