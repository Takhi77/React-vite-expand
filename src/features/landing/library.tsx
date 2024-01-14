import { Button } from "@features/button";
// import Rotate from "@features/icons/icon/rotate";
import Star from "@features/icons/icon/star";
import { styled } from "styled-components";
import basic from "../../assets/img/main/basic.png";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 933px;
  background-color: #d7f6cb;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: fit-content;
    padding: 58px 0;
  }

  @media only screen and (max-width: 1279px) {
    padding: 120px 0;
  }
`;

const Left = styled.div`
  align-self: center;
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 620px;

  @media only screen and (max-width: 1279px) {
    justify-self: center;
    align-items: center;
  }

  @media only screen and (max-width: 640px) {
    gap: 18px;
    width: calc(100% - 36px);
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 76px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;

export const Subtitle = styled.h3`
  color: #252525;
  font-family: Rubik;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
`;

const LibraryButton = styled.div`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 14px 30px;
  border-radius: 60px;
  border: 1px solid #252525;
  text-transform: uppercase;
  background-color: white;
  cursor: pointer;
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

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

// const RotateButton = styled.div`
//   border-radius: 60px;
//   border: 1px solid #252525;
//   background-color: white;
//   padding: 18px 30px;
//   cursor: pointer;

//   &:hover {
//     background-color: #f8d467;
//   }
// `;

export const Library = () => {
  return (
    <MainContainer>
      <Left>
        <Star />
        <Title>A tangible kollectible</Title>
        <Subtitle>
          At Kiki Koalas, we believe in making your NFT ownership experience
          truly tangible. When you own a Kiki Koala, you unlock access to 3D
          files for endless creative possibilities.
        </Subtitle>
        <Button>
          <LibraryButton>Kiki Kasino</LibraryButton>
        </Button>
      </Left>
      <Right>
        <img src={basic} alt="" />
        {/* <Button>
          <RotateButton>
            <Rotate />
          </RotateButton>
        </Button> */}
      </Right>
    </MainContainer>
  );
};
