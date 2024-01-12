import { styled } from "styled-components";

interface ArtProps {
  name: string;
  detail: string;
  color: string;
  avatar: string;
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 960px;
  border-top: 3px solid #252525;

  @media (max-width: 1279px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
  }
`;

const Left = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${({ $color }) => $color};

  @media (max-width: 1279px) {
    justify-content: center;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 147px;
  gap: 18px;
  max-width: 462px;
  width: calc(100% - 40px);

  @media (max-width: 1279px) {
    align-items: center;
    margin: 0;
    padding: 58px 0;
  }
`;

const Right = styled.div`
  background-color: #dedede;
  display: flex;

  @media (max-width: 1279px) {
    padding-top: 80px;
    order: -1;
  }
`;

const Art = styled.div`
  max-width: 720px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  @media (max-width: 1279px) {
    max-width: 340px;
  }
`;

const Title = styled.h2`
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 66px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 1279px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 46px;
  }
`;

const Subtitle = styled.h3`
  color: #252525;
  font-family: Rubik;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 1279px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    text-align: center;
    font-size: 22px;
  }
`;

export const ArtItem = ({ data }: { data: ArtProps }) => {
  return (
    <MainContainer>
      <Left $color={data.color}>
        <List>
          <Title>{data.name}</Title>
          <Subtitle>{data.detail}</Subtitle>
        </List>
      </Left>
      <Right>
        <Art>
          <Image src={data.avatar} />
        </Art>
      </Right>
    </MainContainer>
  );
};
