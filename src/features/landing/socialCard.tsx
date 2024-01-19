import { styled } from "styled-components";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { ActionIcon } from "./team";

const MainContainer = styled.div<{ $angle: string }>`
  transition: 0.2s all;
  cursor: pointer;
  rotate: ${({ $angle }) => $angle}deg;

  filter: drop-shadow(4px 4px 0px #000);

  @media (max-width: 640px) {
    filter: drop-shadow(3px 3px 0px #000);
  }

  &:hover {
    filter: drop-shadow(2px 2px 0px #000);

    @media (max-width: 640px) {
      filter: drop-shadow(2px 2px 0px #000);
    }
    rotate: 0deg;
  }

  &:active {
    filter: drop-shadow(0 0 0px #000);

    @media (max-width: 640px) {
      filter: drop-shadow(0 0 0px #000);
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 183px;
  padding: 17px 15px 24px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  border: 3px solid #000;
  background: #fff;
  box-sizing: border-box;
  transition: 0.2s all;
  position: relative;

  &:hover {
    transform: translateX(2px) translateY(2px);

    ${ActionIcon} {
      rotate: 10deg;
    }

    @media (max-width: 640px) {
      transform: translateX(1px) translateY(1px);
    }
  }

  &:active {
    transform: translateX(4px) translateY(4px);

    @media (max-width: 640px) {
      transform: translateX(3px) translateY(3px);
    }
  }

  @media (max-width: 640px) {
    width: 148px;
    padding: 14px 12px 20px;
    gap: 12px;
  }
`;

const Title = styled.h3`
  color: #252525;
  text-align: center;
  font-family: Matter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`;

const Banner = styled.div<{ $color: string }>`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 3px solid #252525;
  background: ${({ $color }) => $color};

  @media (max-width: 640px) {
    height: 105px;
  }
`;

const Icon = styled.div`
  font-size: 69px;
  color: white;

  @media (max-width: 640px) {
    font-size: 55px;
  }
`;

export const SocialCard = ({ type }: { type: string }) => {
  return (
    <MainContainer
      $angle={type === "twitter" ? "5" : type === "telegram" ? "-6" : "0"}
    >
      <Container>
        {type !== 'twitter' && (
          <ActionIcon>soon</ActionIcon>
        )}
        <Banner
          $color={
            type === "twitter"
              ? "#000"
              : type === "telegram"
                ? "#0094FF"
                : "#5F70F5"
          }
        >
          <Icon>
            {type === "twitter" ? (
              <BsTwitterX />
            ) : type === "telegram" ? (
              <FaTelegramPlane />
            ) : (
              <BsDiscord />
            )}
          </Icon>
        </Banner>
        <Title>{type}</Title>
      </Container>
    </MainContainer>
  );
};
