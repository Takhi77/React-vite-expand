import { styled } from "styled-components";
import { Group, Image, Title, TitleImage } from "./welcome";
import icon from "../../assets/img/main/black_icon.png";
import { SocialCard } from "./socialCard";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 672px;
  background-color: #f7f7f7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media (max-width: 1279px) {
    height: fit-content;
    padding: 100px 0;
  }

  @media (max-width: 640px) {
    padding: 58px 0;
    gap: 18px;
  }
`;

const UGroup = styled(Group)`
  max-width: 976px;
  width: calc(100% - 60px);
`;

const SocialGroup = styled.div`
  width: calc(100% - 36px);
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Connect = () => {
  return (
    <MainContainer>
      <UGroup>
        <TitleImage src={icon} />
        <Title>
          Konnect <Image src={icon} />
          with us
        </Title>
      </UGroup>
      <SocialGroup>
        <SocialCard type="twitter" />
        <SocialCard type="discord" />
        <SocialCard type="telegram" />
      </SocialGroup>
    </MainContainer>
  );
};
