import { Button } from "@features/button";
import LogoIcon from "@features/icons/icon/logo";
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
`;

const Header = styled(ItemCenter)`
  justify-content: space-between;
`;

const LogoGroup = styled(ItemCenter)`
  gap: 24px;
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
`;

const FooterText = styled.h3`
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const Item = styled.div`
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export function Footer() {
  return (
    <MainContainer>
      <FooterContainer>
        <Header>
          <LogoGroup>
            <Button style="Logo">
              <Logo>
                <LogoIcon />
              </Logo>
            </Button>
            <LogoText>kiki koalas</LogoText>
          </LogoGroup>
          <FeatureContainer>
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
          </FeatureContainer>
        </Header>
        <Body>
          <FooterText>
            Kick back with 3,333 Kiki Koalas, as we create an ecosystem that
            forms a community beyond pixels.
          </FooterText>
          <Links>
            <Item>
              <FooterText>Home</FooterText>
            </Item>
            <Item>
              <FooterText>Art</FooterText>
            </Item>
            <Item>
              <FooterText>Team</FooterText>
            </Item>
            <Item>
              <FooterText>FAQs</FooterText>
            </Item>
          </Links>
        </Body>
        <Links>
          <Item>
            <FooterText>Privacy policy</FooterText>
          </Item>
          <Item>
            <FooterText>Terms of service</FooterText>
          </Item>
        </Links>
      </FooterContainer>
    </MainContainer>
  );
}
