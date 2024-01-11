import { Button } from "@features/button";
import Star from "@features/icons/icon/star";
import { ActionIcon } from "@features/ui";
import { styled } from "styled-components";
import { Subtitle, Title } from "./library";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 956px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  width: 462px;
`;

const Left = styled.div`
  background-color: #ffdcf7;
  display: flex;
  align-items: center;
  justify-content: end;

  ${List} {
    margin-right: 146px;
  }
`;

const Right = styled.div`
  background-color: #caf2ff;
  display: flex;
  align-items: center;

  ${List} {
    margin-left: 146px;
  }
`;

export const ButtonStructure = styled.div`
  border-radius: 60px;
  border: 1px solid #252525;
  position: relative;
  width: fit-content;
  background-color: white;
  padding: 14px 30px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
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

export const Team = () => {
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
          <Button>
            <ButtonStructure>
              <ButtonText>learn more</ButtonText>
            </ButtonStructure>
          </Button>
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
