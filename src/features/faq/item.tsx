import { styled } from "styled-components";

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

const Button = styled.h2`
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
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

const Detail = styled.div`
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.4s all;
  overflow: hidden;

  max-height: ${({ $active }) => ($active ? "500vh" : "0")};
  height: 100%;
  padding-top: ${({ $active }) => ($active ? "32px" : "0")};
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
    }
  };

  return (
    <Main>
      <MainContainer onClick={handleSet}>
        <Container>
          <Title>{data.title}</Title>
          <Button>{active === data.id ? "-" : "+"}</Button>
        </Container>
      </MainContainer>
      <Detail $active={active === data.id}>{data.detail}</Detail>
    </Main>
  );
};
