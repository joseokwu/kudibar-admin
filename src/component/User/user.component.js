import { userData } from "../../utils/userdata";
import UserCard from "./usercard.component";
import styles from "./styles.module.css";
const UserTable = () => {
  return (
    <div className="py-[0.9rem] px-[0.7rem] bg-white rounded-md">
      <div className=" flex items-center justify-between mb-[0.8rem]">
        <p>New User</p>
        <select className="text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#328BE0]">
          <option value="">Most users</option>
          <option value="Most Recent">Most Recent</option>
          <option value="Most Recent">Last 7 days</option>
          <option value="Most Recent">Last 30 days</option>
          <option value="Most Recent">Last quarter</option>
        </select>
      </div>
      <div>
        {userData.map((data, i) => (
          <div className={`${styles.user_card}`}>
            <UserCard key={i} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserTable;
