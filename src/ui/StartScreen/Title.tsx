import { ByLine } from "../ByLine";
import {
  BottomLineContainer,
  ByLineContainer,
  TitleContainer,
  TopLineContainer,
} from "./styled";

export function Title() {
  return (
    <TitleContainer>
      <TopLineContainer>
        <h1 className="a">A</h1>
        <h1 className="storm">Storm</h1>
        <h1 className="at">at</h1>
      </TopLineContainer>
      <BottomLineContainer>
        <h1>Midnight</h1>
      </BottomLineContainer>
      <ByLineContainer>
        <ByLine />
      </ByLineContainer>
    </TitleContainer>
  );
}
