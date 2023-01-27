import Tables from "../Table/userTable.component";
import nouserIcon from "../../assets/svg/nousericon.svg";
import { adminUsers } from "../../utils/users";
import { Button } from "../Button";

const AdminUsers = () => {
  const userTableHeader = [
    "Name",
    "Email Address",
    "Role",
    "Date Added",
    "Status",
    "Action",
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[20px] my-2 font-semibold">Admin Users</p>
        <Button title={"Create New User"} solid="#01789A" />
      </div>

      {adminUsers.length > 0 ? (
        <>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            <Tables
              tableHeader={userTableHeader}
              adminUsers={adminUsers}
              actionLink="/events/event"
            />
          </section>
        </>
      ) : (
        <section className="h-[60vh] mt-5 p-4 w-full bg-white rounded-[12px] flex items-center justify-center flex-col ">
          <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center bg-[#F5F5F5] ">
            <img src={nouserIcon} alt="" />
          </div>
          <div className="text-[24px] font-semibold mt-3">No Email yet</div>
        </section>
      )}
    </div>
  );
};

export default AdminUsers;
