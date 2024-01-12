import { styled } from "styled-components";
import { Item } from "./item";
import { useState } from "react";

const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 86px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 230px 0 100px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding-bottom: 330px;

  @media (max-width: 640px) {
    padding: 100px 0 30px;
  }
`;

const FaqLists = [
  {
    title: "What is a Kiki Koala?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 0,
  },
  {
    title: "How many Koalas exist?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 1,
  },
  {
    title: "Is the Kiki Koalas art original?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 2,
  },
  {
    title: "Why 3D art?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 3,
  },
];

export const Faq = () => {
  const [active, setActive] = useState<number>(-1);
  return (
    <MainContainer>
      <Title>FAQ</Title>
      <Body>
        {FaqLists.map((data) => (
          <Item
            key={data.id}
            data={data}
            setActive={setActive}
            active={active}
          />
        ))}
      </Body>
    </MainContainer>
  );
};
