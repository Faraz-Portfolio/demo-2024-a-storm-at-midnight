import { motion } from "framer-motion";
import styled from "styled-components";

export const StartScreenContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const InnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 2rem 0;
  box-sizing: border-box;
`;

export const StyledH4 = styled(motion.h4)`
  color: white;
  font-family: "sans-serif";
  font-size: 1.5rem;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0;
  font-weight: 400;
`;

export const TitleContainer = styled.div`
  color: white;

  h1 {
    margin: 0;
    font-weight: lighter;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  gap: 1rem;

  .a {
    font-family: "sans-serif";
    font-size: 1.5rem;
  }

  .storm {
    font-family: "sans-serif";
    font-size: 3rem;
  }

  .at {
    font-family: "sans-serif";
    font-size: 1.5rem;
  }
`;

export const BottomLineContainer = styled.div`
  font-family: "Italiana";
  font-size: 1.4rem;
  margin-top: -1rem;
`;

export const ByLineContainer = styled.div`
  margin-left: 8rem;
  u {
    text-decoration: none;
  }
`;
