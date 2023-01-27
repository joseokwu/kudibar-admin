import styled from "styled-components";
import { Button } from "../Button";
import WhiteCard from "../WhiteCard";

const Financials = () => {
  return (
    <Wrapper>
      <WhiteCard>Financials</WhiteCard>
      <WhiteCard>
        <div className="flex items-center justify-between px-8">
          <h3>Set Kudibar Currency</h3>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              {" "}
              <input type="checkbox" /> <label>NGN</label>
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <input type="checkbox" /> <label>USD</label>
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <input type="checkbox" /> <label>GBP</label>
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <input type="checkbox" /> <label>EUR</label>
            </span>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard>
        <div className="px-8">
          <h3>Split Formula</h3>
          <div className="flex justify-between mt-6">
            <p>Instant Payout Percentage (Normal Users)</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Instant Payout Percentage (Verified Users)</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>After Event Percentage</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>After Event Payout Duration</p>
            <input className="input-text" placeholder="10" />
          </div>
          <span className="flex justify-end mt-6">
            <Button title={"Save Changes"} solid="#01789A" />
          </span>
        </div>
      </WhiteCard>
      <WhiteCard>
        <div className="px-8">
          <h3>Minimum Amount Price Of Ticket</h3>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in NGN</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in USD</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in GBP</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in EUR</p>
            <input className="input-text" placeholder="10" />
          </div>
          <span className="flex justify-end mt-6">
            <Button title={"Save Changes"} solid="#01789A" />
          </span>
        </div>
      </WhiteCard>
      <WhiteCard>
        <div className="px-8">
          <h3>Payment</h3>
          <div className="flex items-center justify-between">
            <p>Set Kudibar Currency</p>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="flex items-center gap-2">
                {" "}
                <input type="checkbox" /> <label>Flutterwave</label>
              </span>
              <span className="flex items-center gap-1">
                {" "}
                <input type="checkbox" /> <label>Paystack</label>
              </span>
              <span className="flex items-center gap-1">
                {" "}
                <input type="checkbox" /> <label>Fincra</label>
              </span>
              <span className="flex items-center gap-1">
                {" "}
                <input type="checkbox" /> <label>Bani</label>
              </span>
            </div>
          </div>
        </div>
      </WhiteCard>
    </Wrapper>
  );
};

export default Financials;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    color: #023e4f;
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    color: #023e4f;
  }
  .input-text {
    border: 1px solid rgba(18, 21, 40, 0.1);
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    width: 10%;
  }
`;
