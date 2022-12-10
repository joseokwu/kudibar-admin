import { Button } from "../../component/Button";
import { TableHeader } from "../../component/componentHelpers/TableHeader";
import HeaderTop from "../../component/Header/HeaderTop";
import BaseLayout from "../../component/Layout";
import SupportTable from "../../component/Table/supportTable";
import { supportData } from "../../utils/users";

const AllSupport = () => {
  const tableHead = ["#ID", "Sender", "Date", "Time", "Subject", "Priority", "Status", "Action"];
  return (
    <BaseLayout>
      <nav className="flex items-center justify-between">
        <HeaderTop path={"/support"} />
        <Button solid title={"New Ticket"} />
      </nav>
      <TableHeader />
      <section className="mt-5 p-4 w-full bg-white rounded-md">
        <SupportTable tableHeader={tableHead} users={supportData} />
      </section>
    </BaseLayout>
  );
};
export default AllSupport;
