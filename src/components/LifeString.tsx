import styled from "@emotion/styled";
import stringImage from "../assets/images/string.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AboutCard from "./cards/AboutCard";
import SkillsCard from "./cards/SkillsCard";
import PixelArtCard from "./cards/PixelArtCard";
import ExperienceCard from "./cards/ExperienceCard";
import ContactFormCard from "./cards/ContactFormCard";

type LifeStringRootProps = {
  pixelSize: number;
};
const LifeStringRoot = styled.div<LifeStringRootProps>`
  display: grid;
  grid-template-columns: 1fr ${({ pixelSize }) => 14 * pixelSize}px 1fr;
  grid-template-areas: "column1 string column2";
  width: 100%;
  max-width: ${({ pixelSize }) => 234 * pixelSize}px;
  margin: 0 auto;
`;

type LifeStringColumnProps = {
  rightSide?: boolean;
  pixelSize: number;
};
const LifeStringColumn = styled.div<LifeStringColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ rightSide }) => (rightSide ? "start" : "end")};
  grid-area: ${({ rightSide }) => (rightSide ? "column2" : "column1")};
  // padding: 0 ${({ pixelSize }) => 2 * pixelSize}px;
`;

type LifeStringPillarProps = {
  pixelSize: number;
  widthPixel: number;
  leftSide?: boolean;
};
const LifeStringPillar = styled.div<LifeStringPillarProps>`
  background-image: url(${stringImage});
  background-repeat: repeat-y;
  background-size: contain;
  width: ${({ pixelSize, widthPixel }) => widthPixel * pixelSize}px;
  height: 100%;
  grid-area: string;
  background-position-x: ${({ leftSide, pixelSize }) =>
    leftSide ? `-${12 * pixelSize}px` : 0};
`;

function LifeString() {
  const [pixelSize] = useState(5);
  const isBreakpoint = useMediaQuery({ query: "(max-width: 900px)" });

  const LifeStringRootBreakPointStyle = {
    gridTemplateColumns: `${2 * pixelSize}px 1fr`,
    gridTemplateAreas: `
      "string column1"
      "string column2"`,
  };

  return (
    <LifeStringRoot
      pixelSize={pixelSize}
      style={{ ...(isBreakpoint && LifeStringRootBreakPointStyle) }}
    >
      <LifeStringColumn
        pixelSize={pixelSize}
        rightSide={isBreakpoint}
        style={{ gridArea: "column1" }}
      >
        <AboutCard rightSide={isBreakpoint} isMobile={isBreakpoint} />
        <SkillsCard rightSide={isBreakpoint} isMobile={isBreakpoint} />
        <PixelArtCard rightSide={isBreakpoint} isMobile={isBreakpoint} />
      </LifeStringColumn>
      <LifeStringPillar
        pixelSize={pixelSize}
        widthPixel={14}
        leftSide={isBreakpoint}
      />
      <LifeStringColumn pixelSize={pixelSize} rightSide={true}>
        <ExperienceCard rightSide={true} isMobile={isBreakpoint} />
        <ContactFormCard rightSide={true} isMobile={isBreakpoint} />
      </LifeStringColumn>
    </LifeStringRoot>
  );
}

export default LifeString;
