import { motion } from "framer-motion";
import styled from "styled-components";

const StyledByLine = styled(motion.a)`
  color: white;
  font-family: "La Belle Aurore";
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

export function ByLine() {
  return (
    <StyledByLine
      href="https://twitter.com/CantBeFaraz"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
      }}
      whileTap={{ scale: 0.9 }}
    >
      by <u>faraz shaikh</u>
    </StyledByLine>
  );
}
