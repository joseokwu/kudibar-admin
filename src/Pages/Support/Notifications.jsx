import GoBackTop from "../../component/GoBackTop";
import SelectComponent from "../../component/SelectComponent";
import WhiteCard from "../../component/WhiteCard";
import styles from "./support.module.css";
import { RecentActivityBar } from "./support";

const TicketsNotifications = () => {
  return (
    <div>
      <GoBackTop />
      <div className="flex flex-col items-stretch gap-2">
        <WhiteCard>
          <div className={`grid grid-cols-[1fr_1fr] gap-4 ${styles.gridTop} `}>
            <SelectComponent label="Category" />
            <SelectComponent label="Time Period" />
          </div>
        </WhiteCard>
        <WhiteCard>
          <div className="flex flex-col items-stretch gap-4">
            {Array(12)
              .fill("")
              .map((item) => (
                <RecentActivityBar />
              ))}
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};

export default TicketsNotifications;
