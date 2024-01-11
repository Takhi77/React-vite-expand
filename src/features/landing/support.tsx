import { styled } from "styled-components";
import { Group, Image, Title, TitleImage } from "./welcome";
import icon from "../../assets/img/main/black_icon.png";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 843px;
  background-color: #fffad0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 38px;
`;

const UGroup = styled(Group)`
  width: 976px;
`;

const Subtitle = styled.h3`
  margin: 0;
  color: #252525;
  text-align: center;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 710px;
`;

export const Support = () => {
  return (
    <MainContainer>
      <UGroup>
        <TitleImage src={icon} />
        <Title>
          Supporting <Image src={icon} />
          Koala konservation
        </Title>
      </UGroup>
      <Subtitle>
        At Kiki Koalas, we're dedicated to protecting koalas from the wild and
        natural disasters in Australia. We will donate a portion of our raised
        funds to koala conservation efforts, helping to ensure their safety and
        survival. By collecting Kiki Koalas NFTs, you contribute to this vital
        cause, making a difference in the lives of these beloved Australian
        icons.
      </Subtitle>
    </MainContainer>
  );
};
