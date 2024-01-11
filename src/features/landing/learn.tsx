import { Button } from "@features/button";
import { styled } from "styled-components";
import learn from "../../assets/img/main/learn.png";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 670px;
  background-color: #caf2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
    padding: 58px 20px;
  }
`;

const Image = styled.img``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 553px;
`;

const Title = styled.h2`
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 76px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const Subtitle = styled.h2`
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const LearnButton = styled.div`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  padding: 14px 30px;
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: white;
  width: fit-content;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
  }
`;

export const Learn = () => {
  return (
    <MainContainer>
      <Image src={learn} />
      <Right>
        <Title>Pixel-by-pixel</Title>
        <Subtitle>
          Our 3D art is a testament to craftsmanship and dedication. We didn't
          rely on artificial intelligence; instead, every pixel was meticulously
          hand-drawn with care and precision, one cursor click at a time.
          <br />
          <br />
          Countless hours were poured into crafting each detail, ensuring that
          every Kiki Koala in the Kiki Kollective capture the labour of love.
        </Subtitle>
        <Button>
          <LearnButton>learn about the art</LearnButton>
        </Button>
      </Right>
    </MainContainer>
  );
};
