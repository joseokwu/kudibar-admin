import { Button } from "../../../component/Button";
import Modal from "../../../component/Modal";

export const FlagModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div style={{ width: "400px" }}>
        <h1 className="text-[24px] mb-[1rem]  font-[700]">Account Flag</h1>
        <form>
          <section className="w-full">
            <label htmlFor="reason for flag" className="my-4  text-[14px] font-[400]">
              Reason for Flagging <span style={{ color: "red" }}>*</span> -
              <small className="text-[12px] font-[400] ml-[4px] text-[#c2c3c7]">
                300 Words max.
              </small>
            </label>
            <textarea
              rows={4}
              cols={4}
              className="outline-[0] p-[5px] text-[14px] my-4 w-full border-[1px] rounded-[8px] border-[#E7E8E9]"
              type="text"
            />
          </section>
          <section className="w-full">
            <label htmlFor="formz" className="my-4 text-[14px] font-[400]">
              Attach File
              <section className="w-full border-[1px] p-[5px] flex justify-end items-center gap-[1rem] rounded-[8px] border-[#E7E8E9]">
                <input
                  placeholder="select attachment"
                  className="hidden w-full border-[0] outline-[0]"
                  type="file"
                  id="formz"
                />
                <img for="formz" src="/asset/file.png" alt="" />
              </section>
            </label>
          </section>
          <div className=" w-full flex justify-center items-center my-[1rem]">
            <Button style={{ width: "70%" }} title={"Flag"} width={"70%"} padding={"20px"} />
          </div>
        </form>
      </div>
    </Modal>
  );
};
