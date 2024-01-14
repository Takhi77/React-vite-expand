import { Button } from "@features/button";
import LogoIcon from "@features/icons/icon/logo";
import { Subtitle } from "@features/landing/learn";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {
  DiscordIcon,
  FeatureContainer,
  ItemCenter,
  Logo,
  SocialButton,
  TwitterIcon,
} from "./header";

const MainContainer = styled.div`
  max-width: 100vw;
  box-shadow: inset 0 5px 1px -1px #252525;
  background-color: #f8d467;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 54px 54px 44px;

  display: flex;
  flex-direction: column;
  gap: 54px;

  @media (max-width: 640px) {
    gap: 39px;
    padding: 54px 37px 44px;
  }
`;

const Header = styled(ItemCenter)`
  justify-content: space-between;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const LogoGroup = styled(ItemCenter)`
  gap: 24px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LogoText = styled.h2`
  color: #000;
  font-family: BarricadaW01-Regular;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  max-width: 710px;

  @media (max-width: 640px) {
    align-items: center;
  }
`;

const Item = styled.div`
  cursor: pointer;

  &:hover {
    ${Subtitle} {
      color: #e0ddec;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

const BLinks = styled(Links)`
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const UFeatureContainer = styled(FeatureContainer)`
  @media (max-width: 640px) {
    display: none;
  }
`;

const UBFeatureContainer = styled(FeatureContainer)`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

const ULogo = styled(Logo)`
  &:hover {
    background-color: #e0ddec;
    transform: translateY(2px) translateX(2px);
  }

  &:active {
    transform: translateY(4px) translateX(4px);
  }

  @media only screen and (max-width: 640px) {
    width: 76px;
    height: 76px;

    &:hover {
      background-color: #e0ddec;
      transform: translateY(2px);
    }

    &:active {
      transform: translateY(4px);
    }
  }
`;

export function Footer() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <FooterContainer>
        <Header>
          <LogoGroup>
            <div onClick={() => navigate("/")}>
              <Button style="Logo">
                <ULogo>
                  <LogoIcon />
                </ULogo>
              </Button>
            </div>
            <LogoText>kiki koalas</LogoText>
          </LogoGroup>
          <UFeatureContainer>
            <Button>
              <SocialButton>
                <TwitterIcon />
              </SocialButton>
            </Button>
            <Button>
              <SocialButton>
                <DiscordIcon />
              </SocialButton>
            </Button>
          </UFeatureContainer>
        </Header>
        <Body>
          <Subtitle>
            Kick back with 3,333 Kiki Koalas, as we create an ecosystem that
            forms a community beyond pixels.
          </Subtitle>
          <Links>
            <Item onClick={() => navigate("/")}>
              <Subtitle>Home</Subtitle>
            </Item>
            <Item onClick={() => navigate("/art")}>
              <Subtitle>Art</Subtitle>
            </Item>
            <Item onClick={() => navigate("/team")}>
              <Subtitle>Team</Subtitle>
            </Item>
            <Item onClick={() => navigate("/faq")}>
              <Subtitle>FAQs</Subtitle>
            </Item>
          </Links>
        </Body>
        <BLinks>
          <Item>
            <Subtitle>Privacy policy</Subtitle>
          </Item>
          <Item>
            <Subtitle>Terms of service</Subtitle>
          </Item>
        </BLinks>
        <UBFeatureContainer>
          <Button>
            <SocialButton>
              <TwitterIcon />
            </SocialButton>
          </Button>
          <Button>
            <SocialButton>
              <DiscordIcon />
            </SocialButton>
          </Button>
        </UBFeatureContainer>
      </FooterContainer>
    </MainContainer>
  );
}
