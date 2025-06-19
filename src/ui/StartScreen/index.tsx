import { AnimatePresence } from "framer-motion";
import { isDesktop } from "react-device-detect";
import { useApp } from "../../useApp";
import { Title } from "./Title";
import { InnerContainer, StartScreenContainer, StyledH4 } from "./styled";

export function StartScreen() {
  const started = useApp((s) => s.started);
  const loaded = useApp((s) => s.loaded);

  return (
    <AnimatePresence>
      {!started && (
        <StartScreenContainer
          onClick={() => {
            if (loaded) {
              useApp.setState({ started: true });
            }
          }}
          key="StartScreenContainer"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <StyledH4
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              ease: "linear",
              times: [0, 0.2, 0.8, 1],
            }}
            style={{
              position: "fixed",
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#111111",
              padding: "1rem",
              boxSizing: "border-box",
              textAlign: "center",
              fontSize: isDesktop ? "3rem" : "2rem",
            }}
          >
            best with sound
          </StyledH4>

          <InnerContainer
            key="InnerContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, ease: "linear" }}
          >
            <br />
            <Title />
            <StyledH4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "linear" }}
              key={loaded ? "loaded" : "loading"}
            >
              {loaded
                ? `${isDesktop ? "click" : "touch"} to begin`
                : "loading..."}
            </StyledH4>
          </InnerContainer>
        </StartScreenContainer>
      )}
    </AnimatePresence>
  );
}
