import { Container, Button } from "./toggle.styles";
export const Toggle = ({ title1, title2, setCurrentCampaign, currentCampaign }) => {
  const handleNavigate = () => {
    setCurrentCampaign(!currentCampaign);
  };

  return (
    <Container>
      <Button toggle={!currentCampaign} data-id="firstButton" onClick={handleNavigate}>
        {title1}
      </Button>
      <Button data-id="secondButton" toggle={currentCampaign} onClick={handleNavigate}>
        {title2}
      </Button>
    </Container>
  );
};
