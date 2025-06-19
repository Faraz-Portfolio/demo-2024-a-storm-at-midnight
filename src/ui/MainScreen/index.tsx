import { useEffect, useState } from "react";
import styled from "styled-components";
import { ByLine } from "../ByLine";

import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { useApp } from "../../useApp";

export const ByLineContainer = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  user-select: none;
`;

export const TitleContainer = styled.h1`
  font-family: "Italiana";
  font-size: 1rem;
  color: white;
  margin: 0;
  font-weight: 400;
`;

export const Credit = styled(motion.a)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  text-decoration: underline;

  color: white;
  font-family: "La Belle Aurore";
  font-size: 1rem;
`;

export const BestOn = styled.p`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 100;

  color: white;
  font-family: "La Belle Aurore";
  font-size: 1rem;
  margin: 0;
`;

export function MainScreen() {
  const started = useApp((s) => s.started);
  const [credit, setCredit] = useState<string[]>([]);

  const credits = [
    ["Bike by @zachiar on Skechfab", "https://sketchfab.com/zachiar"],
    [
      "Rail by @miloszgierczak on Skechfab",
      "https://sketchfab.com/miloszgierczak",
    ],
    ["Sign by @XOIAL on Skechfab", "https://sketchfab.com/XOIAL"],
    ["Rocks by @bumstrum on Skechfab", "https://sketchfab.com/bumstrum"],
    [
      "Grass by @NITINKU68066640 on Skechfab",
      "https://sketchfab.com/Nicholas01",
    ],
    ["Sounds from Pixabay", "https://pixabay.com/"],
  ];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setCredit(credits[i]);
      i = (i + 1) % credits.length;
    }, 2500);

    setCredit(credits[i]);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {started && (
        <>
          <ByLineContainer
            key="ByLineContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1, ease: "linear" }}
          >
            <TitleContainer>A storm at midnight</TitleContainer>
            <ByLine />

            <Credit
              href="https://codesandbox.io/p/devbox/r3f-ts-playground-7ffjx5?file=%2FREADME.md"
              target="_blank"
              whileTap={{ scale: 0.9 }}
            >
              assets by...
            </Credit>
            {isMobile && <BestOn>best on desktop</BestOn>}
          </ByLineContainer>
        </>
      )}
    </AnimatePresence>
  );
}
