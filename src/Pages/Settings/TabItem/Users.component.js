import { useState } from "react";
import Button from "../../../component/Button/button";
import MUITable from "../../../component/Table";
import SettingTables from "../../../component/Table/SettingTable";
import { userSets } from "../../../utils/users";
import CreateModal from "../Modal/CreateUser";

export const Users = () => {
  const [open, setOpen] = useState(false);
  const headers = ["Users", "Email Address", "Roles", "Action"];

  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      {open && <CreateModal closeModal={() => setOpen(false)} />}
      <section className="my-7">
        <SettingTables tableHeader={headers} data={userSets} />
        <div className="mt-8">
          <Button onClick={showModal}>Create User</Button>
        </div>
      </section>
    </>
  );
};
