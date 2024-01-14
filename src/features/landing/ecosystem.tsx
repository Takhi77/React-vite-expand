import { Button } from "@features/button";
import { styled } from "styled-components";
import { Subtitle } from "./learn";
import { Title } from "./library";
import { ActionIcon, ButtonStructure } from "./team";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 754px;
  background-color: #e0ddec;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: fit-content;
  }
`;

const Left = styled.div`
  background: url("eco.png");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 140px);
  background-position-y: bottom;

  @media only screen and (max-width: 1279px) {
    background-position-x: center;
    background-size: 600px;
  }

  @media only screen and (max-width: 640px) {
    background-size: 400px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1279px) {
    order: -1;
    justify-content: center;
    padding: 58px 0;
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

  @media only screen and (max-width: 640px) {
    width: calc(100% - 36px);
    gap: 18px;
    align-items: center;
  }
`;

const ButtonText = styled.h3`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const Ecosystem = () => {
  return (
    <MainContainer>
      <Left />
      <Right>
        <List>
          <Title>Kiki Koalas ecosystem</Title>
          <Subtitle>
            Our vision extends far beyond creating remarkable NFTs. We are
            committed to building an expansive ecosystem of utility that will
            propel Kiki Koalas into a colossal Web3 brand.
          </Subtitle>
          <Button>
            <ButtonStructure>
              <ButtonText>white paper</ButtonText>
              <ActionIcon>soon</ActionIcon>
            </ButtonStructure>
          </Button>
        </List>
      </Right>
    </MainContainer>
  );
};
