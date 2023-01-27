import styled from "styled-components";
import { Button } from "../../../component/Button";
import Modal from "../../../component/Modal";

export const EditModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div style={{ width: "400px" }}>
        <h1 className="text-[24px] mb-[1rem]  font-[700]">Edit Event</h1>
        <form>
          <Wrapper>
            <span className="input-row">
              <label className="label">Payment Percentage (%)</label>
              <span className="input">
                <input className="input" />
              </span>
            </span>
            <span className="input-row">
              <label className="label">Sharing Formular</label>
              <span className="input">
                <input />
                <input />
              </span>
            </span>
            <span className="input-row">
              <label>Publish Event</label>
              <span className="input">
                <input type="radio" name="publish" />
                <label>Yes</label>
                <input type="radio" name="publish" />
                <label>No</label>
              </span>
            </span>
            <span className="input-row">
              <label>Featured Event</label>
              <span className="input">
                <input type="radio" name="featured" />
                <label>Yes</label>
                <input type="radio" name="featured" />
                <label>No</label>
              </span>
            </span>
            <span className="input-row">
              <label>Promote Event</label>
              <span className="input">
                <input type="radio" name="promote" />
                <label>Yes</label>
                <input type="radio" name="promote" />
                <label>No</label>
              </span>
            </span>
          </Wrapper>
          <div className=" w-full flex justify-around items-center my-[2rem]">
            <Button
              style={{ width: "40%" }}
              title={"Cancel"}
              width={"30%"}
              padding={"20px"}
            />
            <Button
              solid="#023E4F"
              style={{ width: "40%" }}
              title={"Save Changes"}
              width={"30%"}
              padding={"20px"}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .input-row {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    .input {
      display: flex;
      gap: 1rem;

      input {
        width: 40%;
        border: 1px solid grey;
        border-radius: 5px;
      }
    }
  }
`;
