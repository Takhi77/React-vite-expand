import { styled } from "styled-components";
import { Group, Image, Span, Title, TitleImage } from "./welcome";
import icon from "../../assets/img/main/black_icon.png";
import { Subtitle } from "./learn";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 843px;
  background-color: #fffad0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: inset 0 3px 1px -1px #252525;
  gap: 38px;

  @media (max-width: 1279px) {
    height: fit-content;
    padding: 100px 0;
  }

  @media (max-width: 640px) {
    padding: 58px 0;
    gap: 18px;
  }
`;

const UGroup = styled(Group)`
  max-width: 976px;
  width: calc(100% - 36px);
`;

const USubtitle = styled(Subtitle)`
  text-align: center;
  max-width: 710px;
  width: calc(100% - 36px);
`;

export const Support = () => {
  return (
    <MainContainer>
      <UGroup>
        <TitleImage src={icon} />
        <Title>
          Supporting{" "}
          <Span>
            <Image src={icon} />
          </Span>
          Koala konservation
        </Title>
      </UGroup>
      <USubtitle>
        At Kiki Koalas, we're dedicated to protecting koalas from the wild and
        natural disasters in Australia. We will donate a portion of our raised
        funds to koala conservation efforts, helping to ensure their safety and
        survival. By collecting Kiki Koalas NFTs, you contribute to this vital
        cause, making a difference in the lives of these beloved Australian
        icons.
      </USubtitle>
    </MainContainer>
  );
};
