import { useApp } from "contexts";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import menuKoala from "../../assets/img/menu/menu_koala.png";
import { useEffect } from "react";
import { ActionIcon } from "@features/landing/team";

const MainContainer = styled.div<{ $active: boolean }>`
  max-width: ${({ $active }) => ($active ? "100vw" : "0")};
  width: 100%;
  height: 100vh;
  background-color: #e0ddec;
  position: fixed;
  overflow: hidden;
  right: 0;
  transition: 1s all;
  z-index: 3;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1440px;
  position: absolute;
  bottom: 100px;
  padding: 0 55px;
  width: calc(100vw);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 1280px) {
    bottom: 50px;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: 0;
    width: 100vw;
    top: calc(50% - 50px);
    transform: translateY(-50%);
  }
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-self: center;

  @media only screen and (max-width: 1023px) {
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 640px) {
    gap: 16px;
  }
`;

const Image = styled.img`
  justify-self: end;
  align-self: center;
  height: 70vh;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const LinkText = styled.h2`
  font-family: "BarricadaW01-Regular";
  color: #252525;
  font-size: 66px;
  transition: 0.6s all;
  margin: 0;

  @media only screen and (max-width: 1280px) {
    font-size: 46px;
  }
`;

const Item = styled.div<{ $type?: boolean }>`
  cursor: pointer;
  position: relative;
  width: fit-content;

  &:hover {
    ${ActionIcon} {
      rotate: 10deg;
    }

    ${LinkText} {
      text-shadow: ${({ $type }) => ($type ? "" : "10px 4px 0px #f8d467")};
    }
  }
`;

export const Menu = () => {
  const { activeMenu, setActiveMenu } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenu]);

  return (
    <MainContainer $active={activeMenu}>
      <Container>
        <Menus>
          <Item
            onClick={() => {
              navigate("/");
              setActiveMenu(false);
            }}
          >
            <LinkText>Home</LinkText>
          </Item>
          <Item
            onClick={() => {
              navigate("/art");
              setActiveMenu(false);
            }}
          >
            <LinkText>Art</LinkText>
          </Item>
          <Item
            onClick={() => {
              navigate("/team");
              setActiveMenu(false);
            }}
          >
            <LinkText>Team</LinkText>
          </Item>
          <Item
            onClick={() => {
              navigate("/faq");
              setActiveMenu(false);
            }}
          >
            <LinkText>FAQs</LinkText>
          </Item>
          <Item $type={true}>
            <LinkText>Whitepaper</LinkText>
            <ActionIcon>soon</ActionIcon>
          </Item>
          <Item $type={true}>
            <LinkText>Kiki Kasino</LinkText>
            <ActionIcon>soon</ActionIcon>
          </Item>
        </Menus>
        <Image src={menuKoala} alt="" />
      </Container>
    </MainContainer>
  );
};
