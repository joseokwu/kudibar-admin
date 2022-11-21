import styled from "styled-components";

const DashboardCard = ({ bgColor, title, icon, bg, value }) => {
  return (
    <Card>
      <CardBg>
        <img src={bgColor} alt="" />
      </CardBg>
      <div className="flex justify-start gap-[0.7rem]">
        <CardImg bg={bg}>
          <img src={icon} alt="" />
        </CardImg>
        <div className="flex justify-center flex-col  items-center ">
          <p className="text-[#12152899] my-[5px]">{title}</p>
          <h3 className="text-[32px] font-bold">{value}</h3>
        </div>
      </div>
    </Card>
  );
};
export default DashboardCard;

export const CardImg = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg};
  border-radius: 50%;
`;
export const CardBg = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
`;
export const Card = styled.div`
  width: 19rem;
  background: white;
  padding: 1rem;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  margin: 0.5rem 1rem;
  //   height: 100px;
`;
