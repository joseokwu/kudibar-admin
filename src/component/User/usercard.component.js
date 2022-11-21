const UserCard = ({ data }) => {
  return (
    <div>
      <div
        className={`my-[5px] text-[14px] rounded-[12px] gap-[1rem] px-[1rem] py-[0.9rem]   flex items-center space-between`}
      >
        <span className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center bg-[green] text-white ">
          C
        </span>
        <p>{data.name}</p>
        <span>{data.date}</span>
        <span>{data.time}</span>
      </div>
    </div>
  );
};
export default UserCard;
