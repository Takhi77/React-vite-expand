import { keyframes, styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #f8d467;
  box-shadow: inset 0 3px 1px -1px #252525;
`;

const Textanim = (y: number) => keyframes`
0% {
    transform: translateX(0);
}
100% {
    transform: translateX(-${y}px);
}`;

const TextDiv = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  padding: 48px 0;

  @media (max-width: 640px) {
    padding: 32px 0;
  }
`;

const Text = styled.h2<{ $distance: number }>`
  display: inline-block;
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  animation: ${({ $distance }) => Textanim($distance)} 5s infinite linear;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const Carousel = ({ text }: { text: string }) => {
  return (
    <MainContainer>
      <TextDiv>
        <Text $distance={text.length * 16}>{text}</Text>
      </TextDiv>
    </MainContainer>
  );
};
