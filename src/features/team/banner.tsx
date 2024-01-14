import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 223px 0 125px;
  background-color: #f7f7f7;
  gap: 22px;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 231px 0 89px;
  }
`;

export const Title = styled.h3`
  margin: 0;
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

const BannerTitle = styled.div`
  max-width: 710px;
  width: calc(100% - 36px);
  position: relative;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("before.png");
    background-repeat: no-repeat;

    @media (max-width: 640px) {
      top: -100px;
      background-size: 94px;
    }
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: -100px;
    bottom: 0;
    background: url("after.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;

    @media (max-width: 640px) {
      top: -140px;
      right: 0;
      background-size: 114px;
      background-position-x: calc(100% - 30px);
      background-position-y: top;
    }
  }
`;

const SubTitle = styled.h2`
  color: #252525;
  text-align: center;
  font-family: Matter;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 710px;
  width: calc(100% - 36px);

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

export const Banner = () => {
  return (
    <MainContainer>
      <BannerTitle>
        <Title>The Kiki Kommunity</Title>
      </BannerTitle>
      <SubTitle>
        We are a dedicated team of builders, visionaries, operators, and
        creators, all aligned with a shared mission: propelling Kiki Koalas to
        become a loved Web3 brand anchored at the heart of the Cardano
        community.
      </SubTitle>
    </MainContainer>
  );
};
