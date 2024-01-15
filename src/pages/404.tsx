import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: calc(100vh - 448px);
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 166px 180px;
`;

export default function Error() {
  return (
    <MainContainer>
      <Container></Container>
    </MainContainer>
  );
}
