import {
  ActionModal,
  StatusTag,
} from "../componentHelpers/Tags/Tags.component";
import styles from "./table.module.css";
import MyPagination from "../Pagination/paginate.component";
import { FaSort } from "react-icons/fa";
const Tables = ({
  users,
  events,
  guests,
  email,
  support,
  adminUsers,
  notif,
  tableHeader,
  actionLink,
}) => {
  // console.log("index", data, "-", i);

  return (
    <div className={styles.table_container}>
      <table className={styles.table_div}>
        <thead className={styles.thead}>
          <tr>
            {tableHeader.map((data, i) => {
              console.log("index", data, "-", i);
              return (
                <th className={styles.tr}>
                  {i === 0 ? (
                    <div className="flex items-center">
                      <span>{data}</span>
                      <FaSort />
                    </div>
                  ) : (
                    <span>{data}</span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {users
            ? users.map((user, i) => {
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
              })
            : events
            ? events.map((event, i) => {
                const { title, type, featured, promoted, date, time, status } =
                  event;

                return (
                  <tr key={i}>
                    <td>
                      <p>{title}</p>
                    </td>
                    <td>
                      <p>{type}</p>
                    </td>
                    <td>
                      <p>{featured}</p>
                    </td>
                    <td>
                      <p>{promoted}</p>
                    </td>
                    <td>
                      <p>{date}</p>
                    </td>
                    <td>
                      <p>{time}</p>
                    </td>
                    <td>
                      <StatusTag
                        text={status}
                        bg={
                          status === "Published"
                            ? "green"
                            : status === "Pending"
                            ? "yellow"
                            : "#023E4F"
                        }
                      />
                    </td>
                    <td>
                      <div className="relative">
                        <ActionModal id={i} link={actionLink} />
                      </div>
                    </td>
                  </tr>
                );
              })
            : guests
            ? guests.map((user, i) => {
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
                      <p>{gender}</p>
                    </td>
                  </tr>
                );
              })
            : support
            ? support.map((user, i) => {
                const { sender, email, tag, date, time, status } = user;
                return (
                  <tr key={i}>
                    <td>
                      <p>{sender}</p>
                    </td>
                    <td>
                      <p>{email}</p>
                    </td>
                    <td>
                      <p>{tag}</p>
                    </td>
                    <td>
                      <p>{date}</p>
                    </td>
                    <td>
                      <p>{time}</p>
                    </td>
                    <td>
                      <StatusTag
                        text={status}
                        bg={status === "Delivered" ? "green" : "red"}
                      />
                    </td>

                    <td>
                      <div className="relative">
                        <ActionModal id={i} link={actionLink} />
                      </div>
                    </td>
                  </tr>
                );
              })
            : notif
            ? notif.map((user, i) => {
                const { title, recipient, type, date, time, status } = user;
                return (
                  <tr key={i}>
                    <td>
                      <p>{title}</p>
                    </td>
                    <td>
                      <p>{recipient}</p>
                    </td>
                    <td>
                      <p>{type}</p>
                    </td>
                    <td>
                      <p>{date}</p>
                    </td>
                    <td>
                      <p>{time}</p>
                    </td>
                    <td>
                      <StatusTag
                        text={status}
                        bg={status === "Delivered" ? "green" : "red"}
                      />
                    </td>

                    <td>
                      <div className="relative">
                        <ActionModal id={i} link={actionLink} />
                      </div>
                    </td>
                  </tr>
                );
              })
            : email
            ? email.map((user, i) => {
                const { title, slug, type, date, time } = user;
                return (
                  <tr key={i}>
                    <td>
                      <p>{title}</p>
                    </td>
                    <td>
                      <p>{slug}</p>
                    </td>
                    <td>
                      <p>{type}</p>
                    </td>
                    <td>
                      <p>{date}</p>
                    </td>
                    <td>
                      <p>{time}</p>
                    </td>

                    <td>
                      <div className="relative">
                        <ActionModal id={i} link={actionLink} />
                      </div>
                    </td>
                  </tr>
                );
              })
            : adminUsers.map((user, i) => {
                const { name, email, role, date, status } = user;
                return (
                  <tr key={i}>
                    <td>
                      <p>{name}</p>
                    </td>
                    <td>
                      <p>{email}</p>
                    </td>
                    <td>
                      <p>{role}</p>
                    </td>
                    <td>
                      <p>{date}</p>
                    </td>
                    <td>
                      <StatusTag
                        text={status}
                        bg={status === "active" ? "green" : "red"}
                      />
                    </td>
                    <td>
                      <div className="relative">
                        <ActionModal id={i} link={actionLink} />
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
