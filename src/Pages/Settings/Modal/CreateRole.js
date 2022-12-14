import Button from "../../../component/Button/button";
import Input, { CheckBox } from "../../../component/Input";
import Modal from "../../../component/Modal";
const CreateRole = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="mx-[2rem]">
        <div className="relative top-[-30px] z-0 ">
          <h3 className="font-[700] text-[24px] ">Create Role</h3>
        </div>
        <section>
          <div className="">
            <label htmlFor="name">Role Title</label>
            <Input placeholder="ex. Ex. Admin" />
          </div>
          <div>
            <label htmlFor="features">Features</label>
            <div className="grid grid-cols-2">
              <div className="flex gap-[0.7rem] mr-2">
                <CheckBox />
                <span>User Management</span>
              </div>
              <div className="flex gap-[0.7rem] mr-2">
                <CheckBox />
                <span>Campaign Management</span>
              </div>
              <div className="flex gap-[0.7rem] mr-2">
                <CheckBox />
                <span>Finance Management</span>
              </div>
              <div className="flex gap-[0.7rem] mr-2">
                <CheckBox />
                <span>Transaction History</span>
              </div>
              <div className="flex gap-[0.7rem] mr-2">
                <CheckBox />
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="my-6">
            <Button>Create</Button>
          </div>
        </section>
      </div>
    </Modal>
  );
};
export default CreateRole;
