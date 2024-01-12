import { css, styled } from "styled-components";

interface faqProps {
  title: string;
  detail: string;
  id: number;
}

const MainContainer = styled.div`
  filter: drop-shadow(0 7px 0 #000);
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #fff;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 20px 30px;
  border: 3px solid #252525;
  border-radius: 18px;
`;

const Title = styled.h2`
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 920px;
  width: calc(100% - 40px);
`;

const Detail = styled.div<{ $active: boolean }>`
  transition: all 400ms linear;
  overflow: hidden;

  ${({ $active }) =>
    $active
      ? css`
          max-height: 400px;
        `
      : css`
          max-height: 0;
        `}
`;

const Subtitle = styled.h3`
  padding-top: 32px;
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const ActiveButton = styled.div<{ $active: boolean }>`
  position: relative;
  h2 {
    color: #252525;
    font-family: BarricadaW01-Regular;
    font-size: 100px;
    font-style: normal;
    font-weight: 100;
    line-height: 40px;
    margin: 0;
    transform: scale(1.5, 1);

    &:last-child {
      position: absolute;
      top: 0;
      transition: 0.2s all linear;
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      h2 {
        &:last-child {
          transform: rotate(90deg) scale(1.5, 1) translateY(-2px)
            translateX(1px);
        }
      }
    `}
`;

export const Item = ({
  data,
  setActive,
  active,
}: {
  data: faqProps;
  setActive: (data: number) => void;
  active: number;
}) => {
  const handleSet = () => {
    console.log(active, data);
    if (active !== data.id) {
      setActive(data.id);
    } else if (active === data.id) {
      setActive(-1);
    }
  };

  return (
    <Main>
      <MainContainer onClick={handleSet}>
        <Container>
          <Title>{data.title}</Title>
          <ActiveButton $active={active !== data.id}>
            <h2>-</h2>
            <h2>-</h2>
          </ActiveButton>
        </Container>
      </MainContainer>
      <Detail $active={active === data.id}>
        <Subtitle>{data.detail}</Subtitle>
      </Detail>
    </Main>
  );
};
