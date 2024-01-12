import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 959px;
  background-color: #f8d467;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    height: 624px;
  }

  &:before {
    position: absolute;
    content: "";
    background: url("banner.png");
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: bottom;

    @media only screen and (max-width: 640px) {
      background: url("min_banner.png");
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 140px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-top: 200px;
  position: relative;
  z-index: 2;

  width: calc(100% - 40px);

  @media (max-width: 640px) {
    font-size: 60px;
  }

  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000,
    0px 0px 5px #000, 0px 0px 6px #000, 0px 0px 7px #000, 1px 2px 1px #000,
    1px 2px 1px #000, 1px 3px 1px #000, 1px 3px 1px #000, 1px 4px 1px #000,
    1px 4px 1px #000, 1px 5px 1px #000, 1px 5px 1px #000, 1px 6px 1px #000,
    1px 6px 1px #000, 1px 7px 1px #000, 1px 7px 1px #000;
`;

export const Banner = () => {
  return (
    <MainContainer>
      <Title>kiki koalas</Title>
    </MainContainer>
  );
};
