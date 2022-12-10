import BaseLayout from "../../component/Layout";
import bgVector from "../../assets/svg/Vector.svg";
import { users } from "../../utils/users";
import bgVector2 from "../../assets/svg/Vector2.png";
import greenVector from "../../assets/svg/greenVector.png";
import pinkVector from "../../assets/svg/pinkVector.png";
import { SupportCard } from "../../component/card/supportCard/card.componment";
import { Button } from "../../component/Button";
import { useNavigate } from "react-router-dom";
const Support = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div className="w-full">
        <div className="flex items-center">
          <SupportCard tp rg bgColor={bgVector} value={"20,000"} title="Total Tickets" />
          <SupportCard tp rg bgColor={bgVector2} value={"500"} title="Unassigned" />
          <SupportCard bt rg bgColor={greenVector} value={"250"} title="Opened" />
          <SupportCard bt rg bgColor={pinkVector} value={"2000"} title="Closed" />
        </div>
        <div className="mt-4">
          <main className="w-full rounded-[8px bg-[#fff] p-[1rem]">
            <nav className="flex items-center justify-between">
              <p className="text-[16px] font-[600] tracking-wide ">Recent Activity</p>
              <Button
                style={{ padding: "5px 20px" }}
                onClick={() => navigate("/support/all")}
                title={"See More"}
              />
            </nav>
            {users.map((user) => (
              <section>
                <div className="flex gap-[0.7rem] my-4 rounded-[12px] w-full py-[1.5rem] px-[1.5rem] bg-[#F5F5F5]">
                  <span className="w-[45px] h-[45px] rounded-[50%] flex justify-center items-center bg-[green] text-white ">
                    CL
                  </span>
                  <div>
                    <p className="text-[#6D6F7A]">
                      <span className="text-[#121528]">Wale </span> submitted a new ticket, Lorem
                      ipsum doloret, amet, consectetur adipiscifacliqsis (2337)
                    </p>
                    <span className="text-[#6D6F7A]">2 hours ago</span>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </BaseLayout>
  );
};
export default Support;
