import { Button } from "@features/button";
import { ActionIcon } from "@features/ui";
import { styled } from "styled-components";
import { Title } from "./library";
import { ButtonStructure } from "./team";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 754px;
  background-color: #e0ddec;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: inset 0 3px 1px -1px #252525;
`;

const Left = styled.div`
  background: url("eco.png");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 140px);
  background-position-y: bottom;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  width: 462px;
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

const Subtitle = styled.h3`
  color: #252525;
  font-family: Rubik;
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