import Tables from "../Table/userTable.component";
import nouserIcon from "../../assets/svg/nousericon.svg";
import { email } from "../../utils/users";
import { Button } from "../Button";

const EmailManagement = () => {
  const userTableHeader = ["Title", "Slug", "Type", "Date", "Time", "Action"];

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[20px] my-2 font-semibold">Email Management</p>
        <Button title={"Create Template"} solid="#01789A" />
      </div>

      {email.length > 0 ? (
        <>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            <Tables
              tableHeader={userTableHeader}
              email={email}
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

export default EmailManagement;
