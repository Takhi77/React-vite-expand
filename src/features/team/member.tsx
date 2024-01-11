import { Button } from "@features/button";
import { BsTwitterX } from "react-icons/bs";
import { styled } from "styled-components";

interface MemberProps {
  role: string;
  name: string;
  explain: string;
  twitter?: string;
  color: string;
  avatar: string;
  icon: string;
}

const MainContainer = styled.div`
  height: 100%;
  border: 3px solid #000;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Abatar = styled.div<{ $color: string }>`
  width: 100%;
  height: 355px;
  background-color: ${({ $color }) => $color};
  display: flex;
  justify-content: center;
`;

const Image = styled.img``;

const Cardboard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 37px 0px 55px 41px;
  gap: 50px;

  width: 100%;
  border-top: 3px solid #000;
`;

const Role = styled.div`
  filter: drop-shadow(0 4px 0 #000);
  width: fit-content;
`;

const RoleDiv = styled.div<{ $color: string }>`
  border-radius: 60px;
  border: 1px solid #252525;
  background: ${({ $color }) => $color};

  padding: 6px 16px;

  color: #252525;
  font-family: Bebas Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MemberInfo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
`;

const Name = styled.h2`
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const Detail = styled.h3`
  max-width: 381px;
  width: calc(100% - 40px);
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const SocialButton = styled.div`
  border-radius: 14px;
  border: 1px solid #252525;
  padding: 17px;
  font-size: 30px;
  color: #252525;

  background-color: white;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
  }
`;

export const Member = ({ data }: { data: MemberProps }) => {
  return (
    <MainContainer>
      <Abatar $color={data.color}>
        <Image src={data.avatar} />
      </Abatar>
      <Cardboard>
        <Role>
          <RoleDiv $color={data.icon}>{data.role}</RoleDiv>
        </Role>
        <MemberInfo>
          <Name>{data.name}</Name>
          <Detail>{data.explain}</Detail>
          <Button>
            <SocialButton>{data.twitter && <BsTwitterX />}</SocialButton>
          </Button>
        </MemberInfo>
      </Cardboard>
    </MainContainer>
  );
};
