import Load from "@features/icons/icon/load";
import { keyframes, styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;

const Processbar = styled.div`
  width: 128px;
  height: 9px;
  background-color: white;
  border-radius: 60px;
`;

const LoadingAnim = keyframes`
0% {
    width: 0px;
}

100% {
    width: 128px;
}
`;

const LoadingBar = styled.div`
  background-color: #f8d467;
  height: 100%;
  border-radius: 60px;
  object-position: left;

  animation: 3s ${LoadingAnim} linear;
`;

export default function Loading() {
  return (
    <MainContainer>
      <Container>
        <Load />
        <Processbar>
          <LoadingBar />
        </Processbar>
      </Container>
    </MainContainer>
  );
}
