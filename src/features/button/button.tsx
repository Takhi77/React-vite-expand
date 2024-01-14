import { styled } from "styled-components";
import { ReactNode } from "react";

const MainContainer = styled.div<{ $style?: string }>`
  transition: 0.2s all;
  width: fit-content;

  filter: ${({ $style }) =>
    $style === "Logo"
      ? "drop-shadow(4px 4px 0px #000)"
      : "drop-shadow(0 4px 0px #000)"};

  @media only screen and (max-width: 640px) {
    justify-self: center;
    filter: ${({ $style }) =>
      $style === "Menu"
        ? "drop-shadow(4px 4px 0px #000)"
        : "drop-shadow(0 4px 0px #000)"};
  }

  &:hover {
    filter: ${({ $style }) =>
      $style === "Logo"
        ? "drop-shadow(2px 2px 0px #000)"
        : "drop-shadow(0 2px 0px #000)"};

    @media only screen and (max-width: 640px) {
      filter: ${({ $style }) =>
        $style === "Menu"
          ? "drop-shadow(2px 2px 0px #000)"
          : "drop-shadow(0 2px 0px #000)"};
    }
  }

  &:active {
    filter: ${({ $style }) =>
      $style === "Logo"
        ? "drop-shadow(0 0 0 #000)"
        : "drop-shadow(0 0 0 #000)"};

    @media only screen and (max-width: 640px) {
      filter: ${({ $style }) =>
        $style === "Menu"
          ? "drop-shadow(0 0 0 #000)"
          : "drop-shadow(0 0 0 #000)"};
    }
  }
`;

export const Button = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: string;
}) => {
  return <MainContainer $style={style}>{children}</MainContainer>;
};
