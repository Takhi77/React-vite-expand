import { styled } from "styled-components";
import { ArtItem } from "./artItem";
import { Title } from "./banner";

const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #f7f7f7;
  box-shadow: inset 0 3px 1px -1px #252525;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 148px 0;

  @media (max-width: 640px) {
    padding: 64px 0;
  }
`;

const UTitle = styled(Title)`
  width: calc(100% - 64px);
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
`;

const ArtLists = [
  {
    name: "The base",
    detail:
      'The foundation of our Kiki Koalas art begins with a focus on "The Base." Every Koala starts as a digital canvas, a blank slate, ready to be infused with personality and charm. The clay-base serves as a digital canvas ready to infused the vibrant personalities of our Koalas.',
    color: "#D7F6CB",
    avatar: "arts/1.png",
  },
  {
    name: "The fur",
    detail:
      '"The Fur" serves as the touchpoint where we strive for realism, inviting you to reach out and feel the softness, even in the digital realm. Our commitment to authenticity extends to the tiniest of details. Each fur trait is meticulously designed to resonate the cozy warmth and softness that Koalas are known for. ',
    color: "#FFDCF7",
    avatar: "arts/2.png",
  },
  {
    name: "The hunger",
    detail:
      '"The Hunger” is where we explore the culinary curiosities of our Koalas. Their appetites reflect their distinct personalities - savouring their favourite treats as expressive as their individuality. Here, they satisfy not only cravings but also their appetite for whimsical stories.',
    color: "#E0DDEC",
    avatar: "arts/3.png",
  },
  {
    name: "The expressions",
    detail: `"The Expressions" capture the heart and soul of our Kiki Koalas, making them more than static digital creations – they're living, emotive beings. From playful grins to inquisitive glances, the Koalas' facial expressions mirror their personalities and resonate with your own emotions.`,
    color: "#CAF2FF",
    avatar: "arts/4.png",
  },
  {
    name: "The fashion",
    detail:
      '"The Fashion" is where we dress our Kiki Koalas in individuality. Exploring accessories and styles amplifies their personalities. Style statements made with a combination of clothes and/or accessories, add an extra layer of charm to their charismatic presence in the Kiki Kollective.',
    color: "#FFFAD0",
    avatar: "arts/5.png",
  },
];

export const List = () => {
  return (
    <MainContainer>
      <Header>
        <UTitle>The keystones to our koalas</UTitle>
      </Header>
      <Body>
        {ArtLists.map((data, index) => (
          <ArtItem key={index} data={data} />
        ))}
      </Body>
    </MainContainer>
  );
};
