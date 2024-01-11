import { styled } from "styled-components";
import art from "../../assets/img/art/art.png";

const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0ddec;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 233px 0 125px;
  background: url("art.png");
  background-repeat: no-repeat;
  background-position-y: bottom;

  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;

  @media (max-width: 640px) {
    display: grid;
    grid-template-rows: auto auto 1fr;
    background: none;
    padding: 141px 0 0 0;
  }
`;

export const Title = styled.h2`
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 86px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 709px;
  width: calc(100% - 36px);

  @media (max-width: 640px) {
    font-size: 46px;
    justify-self: center;
  }
`;

const SubTitle = styled.h3`
  color: #252525;
  text-align: center;
  font-family: Matter;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  max-width: 709px;
  width: calc(100% - 36px);

  @media (max-width: 640px) {
    font-size: 22px;
    justify-self: center;
  }
`;

const Image = styled.img`
  display: none;
  height: 413px;
  @media (max-width: 640px) {
    justify-self: center;
    display: block;
  }
`;

export const Banner = () => {
  return (
    <MainContainer>
      <Container>
        <Title>Krafting the Kiki Koalas</Title>
        <SubTitle>
          Our 3D art is a living tribute to artistry and unwavering commitment.
          We broke free from the grasp of 2D art and artificial intelligence,
          crafting every pixel with an artist's touch, one cursor click at a
          time.
        </SubTitle>
        <Image src={art} />
      </Container>
    </MainContainer>
  );
};
