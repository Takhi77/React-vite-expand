import { styled } from "styled-components";
import icon from "../../assets/img/main/icon.png";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 746px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    height: 671px;
  }
`;

const Container = styled.div`
  width: 710px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 36px);
    gap: 16px;
  }
`;

export const Title = styled.div`
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 86px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;

const Content = styled.h3`
  color: #252525;
  text-align: center;
  font-family: Rubik;
  font-size: 26px;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
`;

export const Image = styled.img`
  height: 94px;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 640px) {
    gap: 18px;
  }
`;

export const TitleImage = styled.img`
  height: 94px;
  width: fit-content;
  display: none;

  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

export const Welcome = () => {
  return (
    <MainContainer>
      <Container>
        <Group>
          <TitleImage src={icon} />
          <Title>
            Say hello to the Kiki <Image src={icon} />
            Koalas
          </Title>
        </Group>
        <Content>
          Introducing the Kiki Koalas – 3,333 adorable Koalas that kick back at
          the Kiki Kollective! The Kiki Koalas are not only about the 3D art;
          it's about nurturing a welcoming and tightly-knit community. Each Kiki
          Koala brings us together, forming bonds and friendships that transcend
          pixels and screens.
        </Content>
      </Container>
    </MainContainer>
  );
};
