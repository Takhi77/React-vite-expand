import { Button } from "@features/button";
import LogoIcon from "@features/icons/icon/logo";
import { styled, keyframes } from "styled-components";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { useApp } from "contexts";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  position: fixed;
  max-width: 100vw;
  width: 100%;
  z-index: 5;
`;

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 36px 54px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    padding: 18px 20px;
  }
`;

export const ItemCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(ItemCenter)`
  width: 76px;
  height: 76px;
  border-radius: 16px;
  background-color: white;
  justify-content: center;
  border: 1px solid #252525;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #e0ddec;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
  }

  @media only screen and (max-width: 640px) {
    width: 52px;
    height: 52px;
    padding: 0 10px;
    border-radius: 11px;
    box-sizing: border-box;
  }
`;

export const FeatureContainer = styled(ItemCenter)`
  gap: 10px;
`;

export const SocialButton = styled(ItemCenter)`
  width: 66px;
  height: 66px;
  justify-content: center;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;
  border: 1px solid #252525;
  transition: 0.2s all;

  &:hover {
    background-color: #e0ddec;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
  }
`;

export const DiscordIcon = styled(BsDiscord)`
  font-size: 30px;
  color: #252525;
`;

export const TwitterIcon = styled(BsTwitterX)`
  font-size: 30px;
  color: #252525;
`;

export const LearnMoreButton = styled(ItemCenter)`
  justify-content: center;
  padding: 14px 30px;
  border-radius: 60px;
  background-color: white;
  cursor: pointer;
  transition: 0.2s all;
  border: 1px solid #252525;
  position: relative;

  &:hover {
    background-color: #f8d467;
  }
`;

const ButtonText = styled.h2`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  text-transform: uppercase;
  margin: 0;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const MenuButton = styled(ItemCenter)<{ $active: boolean }>`
  justify-content: center;
  gap: 10px;
  height: 66px;
  padding: 0 28px;
  background-color: ${({ $active }) => ($active ? "#f8d467" : "white")};
  border-radius: 60px;
  border: 1px solid #252525;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
    transform: translateY(2px) translateX(2px);
  }

  &:active {
    transform: translateY(4px) translateX(4px);
  }

  @media only screen and (max-width: 640px) {
    width: 52px;
    height: 52px;
    padding: 0;
    border-radius: 11px;
  }
`;

const menuIconLineHeight = 2;
const menuIconLineSpace = 6;
const menuIconLineOffsetY = menuIconLineHeight + menuIconLineSpace;
const menuIconHeight = 3 * menuIconLineHeight + 2 * menuIconLineSpace;
const cubicBezierIn = "cubic-bezier(0.3, 1, 0.7, 1)";

const animateLine1 = keyframes`
0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, ${menuIconLineOffsetY}px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, ${menuIconLineOffsetY}px, 0) rotate(45deg);
  }`;

const animateLine2 = keyframes`
0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }`;

const animateLine3 = keyframes`
0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -${menuIconLineOffsetY}px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, -${menuIconLineOffsetY}px, 0) rotate(135deg);
  }`;

const animateLine1Rev = keyframes`
0% {
    transform: translate3d(0, ${menuIconLineOffsetY}px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, ${menuIconLineOffsetY}px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }`;

const animateLine2Rev = keyframes`
0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }`;

const animateLine3Rev = keyframes`
0% {
    transform: translate3d(0, -${menuIconLineOffsetY}px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -${menuIconLineOffsetY}px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }`;

const MenuIcon = styled.div`
  width: 16px;
  height: ${menuIconHeight}px;

  &.no-animation {
    animation: none !important;
  }

  .line-1,
  .line-2,
  .line-3 {
    height: ${menuIconLineHeight}px;
    width: 100%;
    background-color: #252525;
    transition: background-color 0.2s ease-in-out;
  }

  .line-1 {
    animation: ${animateLine1Rev} 0.7s ease-in-out;
  }

  .line-2 {
    margin: ${menuIconLineSpace}px 0;
    animation: ${animateLine2Rev} 0.7s ease-in-out;
  }

  .line-3 {
    animation: ${animateLine3Rev} 0.7s ease-in-out;
  }

  &.active {
    .line-1 {
      animation: ${animateLine1} 0.7s ${cubicBezierIn} forwards;
    }
    .line-2 {
      animation: ${animateLine2} 0.7s ${cubicBezierIn} forwards;
    }
    .line-3 {
      animation: ${animateLine3} 0.7s ${cubicBezierIn} forwards;
    }
  }
`;

// const shakeAnimation = keyframes`
// 0% {rotate: 20deg;}
// 50% {rotate: -20deg;}
// 100% {rotate: 20deg;}
// `;

// export const ActionIcon = styled(ItemCenter)`
//   justify-content: center;
//   position: absolute;
//   top: -15px;
//   right: -5px;
//   border-radius: 60px;
//   border: 1px solid #252525;
//   background-color: #f8d467;
//   padding: 4px 8px;

//   color: #252525;
//   text-transform: uppercase;
//   font-family: Bebas Neue;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;

//   animation: ${shakeAnimation} 2s ease-in-out infinite;
// `;

const VisibleButton = styled.div`
  display: block;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export function Header() {
  const { activeMenu, setActiveMenu } = useApp();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <HeaderContainer>
        <div onClick={() => navigate("/")}>
          <Button style="Logo">
            <Logo>
              <LogoIcon />
            </Logo>
          </Button>
        </div>
        <FeatureContainer>
          <VisibleButton>
            <Button>
              <SocialButton>
                <TwitterIcon />
              </SocialButton>
            </Button>
          </VisibleButton>
          <VisibleButton>
            <Button>
              <SocialButton>
                <DiscordIcon />
              </SocialButton>
            </Button>
          </VisibleButton>
          {/* <Button>
            <LearnMoreButton>
              <MoreText>learn more</MoreText>
              <ActionIcon>soon</ActionIcon>
            </LearnMoreButton>
          </Button> */}
          <Button style="Menu">
            <MenuButton
              $active={activeMenu}
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <MenuIcon className={`${activeMenu ? "active" : ""}`}>
                <div className={`line-1 ${activeMenu ? "" : "no-animation"}`} />
                <div className={`line-2 ${activeMenu ? "" : "no-animation"}`} />
                <div className={`line-3 ${activeMenu ? "" : "no-animation"}`} />
              </MenuIcon>
              <ButtonText>menu</ButtonText>
            </MenuButton>
          </Button>
        </FeatureContainer>
      </HeaderContainer>
    </MainContainer>
  );
}
