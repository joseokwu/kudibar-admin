import { membersData } from "../../../utils/users";

const Members = () => {
  return (
    <div>
      <div className="my-[1.5rem] ">
        <p>Referee</p>
        <div className="mt-[0.7rem] flex items-center py-[0.8rem] px-[1.5rem] gap-[1rem] bg-[whitesmoke] w-[fit-content] rounded-[8px] ">
          <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center bg-[green] text-white">
            EL
          </div>
          <p>Emmanuella@gmail.com</p>
        </div>
      </div>
      <div>
        <p>Members</p>
        <div className="grid grid-cols-2">
          {membersData.map((data, i) => (
            <div
              key={i}
              className="mt-[0.7rem] mx-[0.6rem] flex items-center py-[0.8rem] px-[1.5rem] gap-[1rem] bg-[whitesmoke]  rounded-[8px] "
            >
              <div
                className="w-[35px]  uppercase h-[35px] rounded-[50%] flex justify-center items-center text-white"
                style={{ backgroundColor: data.bg }}
              >
                {data.email.charAt(0)}
              </div>
              <p>{data.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Members;
