import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, ReactNode } from "react";
import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #f8d467;
  box-shadow: inset 0 3px 1px -1px #252525;
`;

const TextDiv = styled.div`
  padding: 48px 0;

  @media (max-width: 640px) {
    padding: 32px 0;
  }
`;

const Text = styled.h2`
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Motion = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

const Parallax = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Parallax>
      <Motion style={{ x }}>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </Motion>
    </Parallax>
  );
}

export const Carousel = ({ text }: { text: string }) => {
  return (
    <MainContainer>
      <TextDiv>
        <ParallaxText baseVelocity={-1}>
          <Text>{text}</Text>
        </ParallaxText>
      </TextDiv>
    </MainContainer>
  );
};
