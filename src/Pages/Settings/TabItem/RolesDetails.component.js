import Button from "../../../component/Button/button";
import GoBackTop from "../../../component/GoBackTop";
import Input, { CheckBox } from "../../../component/Input";
import WhiteCard from "../../../component/WhiteCard";

const RolesDetail = () => {
  return (
    <div>
      <GoBackTop />
      <WhiteCard>
        <div>
          <label htmlFor="role">Role</label>
          <Input placeholder="Admin" />
        </div>
        <div className="my-4">
          <label htmlFor="permissions" className="my-4 text-[#12152899]">
            Permissions
          </label>
        </div>
        <div className="flex  my-4">
          <p className="font-[700] w-[30%]">Users Management</p>
          <div className="flex items-center">
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Create</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Edit</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>View</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="flex  my-4">
          <p className="font-[700] w-[30%]">Campaign Management</p>
          <div className="flex items-center">
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Create</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Edit</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>View</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="flex  my-4">
          <p className="font-[700]  w-[30%]">Finance Management</p>
          <div className="flex items-center">
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Create</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Edit</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>View</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="flex  my-4">
          <p className="font-[700]  w-[30%]">Transaction History</p>
          <div className="flex items-center">
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Create</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Edit</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>View</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="flex  my-4">
          <p className="font-[700]  w-[30%]">Support</p>
          <div className="flex items-center">
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Create</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Edit</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>View</span>
            </div>
            <div className="mr-4 flex gap-[0.7rem] accent-[#328BE0] ">
              <CheckBox />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </WhiteCard>
      <div className="mt-4">
        <Button>Update</Button>
      </div>
    </div>
  );
};
export default RolesDetail;
