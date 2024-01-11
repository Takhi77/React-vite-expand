import { styled } from "styled-components";
import { Member } from "./member";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 3px 1px -1px #252525;
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
  max-width: 710px;
  width: calc(100% - 36px);

  padding: 146px 0;

  @media (max-width: 640px) {
    font-size: 46px;
  }
`;

const Collectives = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
`;

const MemberList = [
  {
    role: "founder",
    name: "Christian",
    explain:
      "Cardano class of 2017, 7-8 figure business builder, engineer, product creator.",
    twitter: "h",
    color: "#FFDCF7",
    avatar: "members/1.png",
    icon: "#FFDCF7",
  },
  {
    role: "founder",
    name: "Thomas",
    explain:
      "Obsessed with Cardano since 2021, engineer, beast operator, jack of all trades, innovator.",
    twitter: "h",
    color: "#E0DDEC",
    avatar: "members/2.png",
    icon: "#FFDCF7",
  },
  {
    role: "cto",
    name: "Harri",
    explain:
      "Solution architect, Cardano developer, open source lover, previously work at MLabs.",
    twitter: "h",
    color: "#CAF2FF",
    avatar: "members/3.png",
    icon: "#D7F6CB",
  },
  {
    role: "blockchain developer",
    name: "Edmund",
    explain:
      "6 years full stack developer, 2 years Cardano blockchain. Worked on Direct-Ed.",
    twitter: "h",
    color: "#D7F6CB",
    avatar: "members/4.png",
    icon: "#F3F6CB",
  },
  {
    role: "blockchain developer",
    name: "Golddy",
    explain:
      "4 years full stack developer, 1.5 years Cardano blockchain. Built Platypus Cyber Punks Staking.",
    twitter: "h",
    color: "#FFFAD0",
    avatar: "members/5.png",
    icon: "#F3F6CB",
  },
  {
    role: "full stack developer",
    name: "Emmanuel",
    explain:
      "3 years full stack developer, 1 year Cardano blockchain, African dev community builder.",
    twitter: "h",
    color: "#CAF2FF",
    avatar: "members/6.png",
    icon: "#9DC05A",
  },
  {
    role: "3d artist",
    name: "Ben",
    explain:
      "Dreamer, visualiser, NFT lover. All about creating something that sparks emotion.",
    twitter: "h",
    color: "#FFDCF7",
    avatar: "members/7.png",
    icon: "#F8BE67",
  },
  {
    role: "community manager",
    name: "Rekt noob",
    explain:
      "Cardano freak, community builder, relationship manager. Marketing degree.",
    twitter: "h",
    color: "#CAF2FF",
    avatar: "members/8.png",
    icon: "#FFDCF7",
  },
  {
    role: "legal advisor",
    name: "Yowie",
    explain: "Cardano class of 2017. Technology, media and telco lawyer. ",
    twitter: "h",
    color: "#D7F6CB",
    avatar: "members/9.png",
    icon: "#CCD2FF",
  },
];

export const Collective = () => {
  return (
    <MainContainer>
      <Title>Meet the Kiki Kollective</Title>
      <Collectives>
        {MemberList.map((data, index) => (
          <Member key={index} data={data} />
        ))}
      </Collectives>
    </MainContainer>
  );
};
