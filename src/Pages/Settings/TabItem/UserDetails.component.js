import Button from "../../../component/Button/button";
import GoBackTop from "../../../component/GoBackTop";
import Input, { CheckBox } from "../../../component/Input";
import WhiteCard from "../../../component/WhiteCard";

const UserSettingDetails = () => {
  return (
    <div>
      <GoBackTop />
      <WhiteCard>
        <p className="text-[18px] font-[600] mb-6 text-[#12152899] ">Basic Information</p>
        <section className="grid grid-cols-2 gap-[3rem] ">
          <div>
            <label htmlFor="name">Name</label>
            <Input placeholder="Kate Sandra" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <Input placeholder="Katesandra@gmail.com" />
          </div>
        </section>
        <p className="text-[18px] font-[600] my-4 text-[#12152899] ">Role</p>
        <section>
          <div className="mb-4">
            <label htmlFor="email">Select a Role</label>
            <Input placeholder="Admin" />
          </div>
          <section className="flex items-center">
            <div className="flex gap-[0.6rem] mr-6">
              <CheckBox type="checkbox" />
              <label htmlFor="">User Management</label>
            </div>
            <div className="flex gap-[0.6rem] mr-6">
              <CheckBox type="checkbox" />
              <label htmlFor="">Campaign Management</label>
            </div>
            <div className="flex gap-[0.6rem] mr-6">
              <CheckBox type="checkbox" />
              <label htmlFor="">Support</label>
            </div>
            <div className="flex gap-[0.6rem] mr-6">
              <CheckBox type="checkbox" />
              <label htmlFor="">Finance Management</label>
            </div>
          </section>
        </section>
      </WhiteCard>
      <div className="mt-4">
        <Button>Update</Button>
      </div>
    </div>
  );
};
export default UserSettingDetails;
