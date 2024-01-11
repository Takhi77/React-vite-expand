import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 959px;
  background-color: #f8d467;
  position: relative;
  overflow: hidden;

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

export const Banner = () => {
  return <MainContainer></MainContainer>;
};
