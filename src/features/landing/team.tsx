import { Button } from "@features/button";
import Star from "@features/icons/icon/star";
import { ItemCenter } from "@features/ui";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Subtitle, Title } from "./library";

const MainContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1279px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  width: 462px;

  @media only screen and (max-width: 1279px) {
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 40px);
    gap: 18px;
  }
`;

const Left = styled.div`
  background-color: #ffdcf7;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 210px 0;
  box-shadow: inset -3px 3px 1px -1px #252525;
  ${List} {
    margin-right: 146px;
  }

  @media only screen and (max-width: 1279px) {
    padding: 160px 0;
    justify-content: center;
    box-shadow: inset 0 3px 1px -1px #252525;

    ${List} {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 58px 0;
  }
`;

const Right = styled.div`
  background-color: #caf2ff;
  display: flex;
  align-items: center;
  box-shadow: inset -3px 3px 1px -1px #252525;

  ${List} {
    margin-left: 146px;
  }

  @media only screen and (max-width: 1279px) {
    justify-content: center;
    box-shadow: inset 0 3px 1px -1px #252525;

    ${List} {
      margin: 0;
    }
  }
`;

export const ActionIcon = styled(ItemCenter)`
  justify-content: center;
  position: absolute;
  top: -15px;
  right: -5px;
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: #f8d467;
  padding: 4px 8px;

  color: #252525;
  text-transform: uppercase;
  font-family: Bebas Neue;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.2s all;
  rotate: -10deg;
`;

const BasicButton = styled.div`
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: white;
  cursor: pointer;
`;

export const ButtonStructure = styled(BasicButton)`
  position: relative;
  width: fit-content;
  padding: 14px 30px;
  transition: 0.2s all;

  &:hover {
    transform: translateY(2px);

    ${ActionIcon} {
      rotate: 10deg;
    }
  }

  &:active {
    transform: translateY(4px);
  }
`;

const ButtonText = styled.h3`
  margin: 0;
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamButton = styled(BasicButton)`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 14px 30px;
  text-transform: uppercase;
  width: fit-content;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
  }
`;

export const Team = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Left>
        <List>
          <Star />
          <Title>Meet the team</Title>
          <Subtitle>
            Sink your claws into the team leading the Kiki Koalas to lofty gum
            tree tops.
          </Subtitle>
          <div onClick={() => navigate("/team")}>
            <Button>
              <TeamButton>stalk the team</TeamButton>
            </Button>
          </div>
        </List>
      </Left>
      <Right>
        <List>
          <Star />
          <Title>Hang out with us</Title>
          <Subtitle>
            Kick it with us in our tree tops where we sleep, eat and repeat.
          </Subtitle>
          <Button>
            <ButtonStructure>
              <ButtonText>discord</ButtonText>
              <ActionIcon>soon</ActionIcon>
            </ButtonStructure>
          </Button>
        </List>
      </Right>
    </MainContainer>
  );
};
