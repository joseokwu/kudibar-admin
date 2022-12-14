import Button from "../../../component/Button/button";
import Input from "../../../component/Input";
import Modal from "../../../component/Modal";
const CreateModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="mx-[2rem]">
        <div className="relative top-[-30px] z-0 ">
          <h3 className="font-[700] text-[24px] ">Create New User</h3>
        </div>
        <section>
          <div className="">
            <label htmlFor="name">Full Name</label>
            <Input placeholder="ex. John Doe" />
          </div>
          <div className="my-2">
            <label htmlFor="name">Email Address</label>
            <Input placeholder="example@gmail.com" />
          </div>
          <div className="my-2">
            <label htmlFor="name">Role</label>
            <Input placeholder="Select One" />
          </div>
          <div className="my-6">
            <Button>Create</Button>
          </div>
        </section>
      </div>
    </Modal>
  );
};
export default CreateModal;
