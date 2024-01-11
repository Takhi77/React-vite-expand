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
`;

const UGroup = styled(Group)`
  width: 976px;
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Connect = () => {
  return (
    <MainContainer>
      <UGroup>
        <TitleImage src={icon} />
        <Title>
          Connect <Image src={icon} />
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
