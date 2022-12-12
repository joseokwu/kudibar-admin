import styled from "styled-components";
export const CampaignCard = ({ value, text, img, bg, color }) => {
  return (
    <Container bg={bg}>
      <div className="text-[15px] font-[400]">{text}</div>
      <div className="flex items-center justify-between">
        <h3 className={`font-[600] text-[32px] text-[${color}]`}>{value}</h3>
        <img src={img} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  margin: 10px;
  margin-top: 20px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.1);
  //   height: 136px;
  overflow: hidden;
  width: 240px;
  background: ${({ bg }) => bg};
  //   background: linear-gradient(68.44deg, #0968e5 0%, #0941ab 49.27%, #091970 100%);
`;
