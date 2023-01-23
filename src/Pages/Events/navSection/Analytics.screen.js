import { Toggle } from "../../../component/componentHelpers/Toggle/toggle.component";
import MyPagination from "../../../component/Pagination/paginate.component";
import { AnalyticsData, membersData } from "../../../utils/users";
import styles from "./nav.module.css";
const Analytics = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center">
          <Toggle title1={"Income"} title2="Expenses" />
          <div>
            <select
              name="duration"
              id="duration"
              className="text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[rgba(18, 21, 40, 0.1)]"
            >
              <option value="Weekly">Weekly</option>
              <option value="Weekly">Daily</option>
              <option value="Weekly">Quaterly</option>
              <option value="Weekly">Monthly</option>
            </select>
          </div>
        </div>
        <main>
          {membersData.map((data, i) => (
            <div key={i} className={`${styles.card} rounded-[0.7rem]`}>
              <div className="flex my-[1.3rem] justify-between items-center p-[0.8rem] ">
                <aside className="flex gap-[1rem]">
                  <div
                    className="w-[35px] uppercase h-[35px] rounded-[50%] flex justify-center items-center text-white"
                    style={{ backgroundColor: data.bg }}
                  >
                    {data.email.charAt(0)}
                  </div>
                  <div>
                    <p>{data.email}</p>
                    <small className="text-[#12152899]">26 Feb 2022, at 13:45 PM</small>
                  </div>
                </aside>
                <div className="text-[#48BB78] font-[700] text-[18px]">+$40</div>
              </div>
            </div>
          ))}
        </main>
        <div>
          <MyPagination />
        </div>
      </div>
    </section>
  );
};
export default Analytics;
