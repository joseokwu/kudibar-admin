import Button from "../../../component/Button/button";
import MUITable from "../../../component/Table";
import SettingTables from "../../../component/Table/SettingTable";
import { userSets } from "../../../utils/users";

export const Users = () => {
  const headers = ["Users", "Email Address", "Roles", "Action"];
  return (
    <section className="my-7">
      <SettingTables tableHeader={headers} data={userSets} />
      <div className="mt-8">
        <Button>Create User</Button>
      </div>
    </section>
  );
};
