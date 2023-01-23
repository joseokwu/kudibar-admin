import styled from "@emotion/styled";
export const StatCard = ({ pr, pb, pt, title, amount, icon }) => {
  return (
    <Container>
      <p>{title}</p>
      <span className="flex w-8 h-10 align-center gap-[1rem]">{icon && <img height={5} width={30} src={icon} alt="icon"></img>}<h1>{amount}</h1></span>
      
      
    </Container>
  );
};

export const Container = styled.div`
  padding: 20px;
  margin: 10px;
  margin-top: 20px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.1);
  //   height: 136px;
  overflow: hidden;
  width: 240px;
  background: #fff;
  &::first-of-type {
    margin-top: 0px;
  }

  p {
    font-size: 1rem;
    font-weight: 400;

    color: rgba(18, 21, 40, 0.5);
    @media only screen and (max-width: 800px) {
      font-size: 0.8rem;
      margin-top: 2rem;
      margin-left: 1rem;
    }
    @media only screen and (max-width: 400px) {
      margin-left: 0;
    }
  }

  h1 {
    font-size: 1.75rem;
    color: #121528;
    font-weight: 600;
    margin-bottom: 10px;
    @media only screen and (max-width: 1000px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 800px) {
      font-size: 1.3rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    @media only screen and (max-width: 400px) {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    // padding: 20px 40px;
  }

  @media only screen and (max-width: 800px) {
    // padding: 1rem 0.5rem;
    width: 100%;
    // background: red;
    margin: 1rem;
    margin-left: 4px;
    margin-right: 4px;
    padding: 0.5rem;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: ${({ pr }) => pr};
  bottom: ${({ pb }) => pb};
  top: ${({ pt }) => pt};
  overflow: hidden;
  cliq: rect(0px, 60px, 200px, 0px);
  z-index: 1;
`;
