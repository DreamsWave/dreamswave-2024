import styled from "@emotion/styled";
import cardConnetionImage from "../assets/images/card-connection.png";
import cardConnetionPointImage from "../assets/images/card-connection-point.png";
import cardBorderImage from "../assets/images/card-border.png";

const PIXEL_SIZE = 5;

const CardWrapper = styled.div<{ rightSide?: boolean }>`
  margin: ${7 * PIXEL_SIZE}px 0;
  color: #546987;
  font-size: ${2 * PIXEL_SIZE}px;
  position: relative;
  height: fit-content;
  display: inline-flex;
  margin-right: ${({ rightSide }) => (rightSide ? `${17 * PIXEL_SIZE}px` : 0)};
  margin-left: ${({ rightSide }) => (rightSide ? 0 : `${17 * PIXEL_SIZE}px`)};
  z-index: 1;

  &::before {
    content: "";
    width: ${10 * PIXEL_SIZE}px;
    height: ${1 * PIXEL_SIZE}px;
    background-image: url(${cardConnetionImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    bottom: calc(100% + ${2 * PIXEL_SIZE}px);
    right: ${({ rightSide }) => (rightSide ? `auto` : `100%`)};
    left: ${({ rightSide }) => (rightSide ? `100%` : `auto`)};
  }

  &::after {
    content: "";
    width: ${3 * PIXEL_SIZE}px;
    height: ${7 * PIXEL_SIZE}px;
    background-image: url(${cardConnetionPointImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    bottom: calc(100% - ${1 * PIXEL_SIZE}px);
    right: ${({ rightSide }) =>
      rightSide ? `auto` : `calc(100% + ${9 * PIXEL_SIZE}px)`};
    left: ${({ rightSide }) =>
      rightSide ? `calc(100% + ${9 * PIXEL_SIZE}px)` : `auto`};
    z-index: 3;
  }
`;

const CardTitle = styled.h2<{ rightSide?: boolean }>`
  height: ${6 * PIXEL_SIZE}px;
  width: 75%;
  margin: 0;
  position: absolute;
  bottom: 100%;
  left: ${({ rightSide }) => (rightSide ? `auto` : `${1 * PIXEL_SIZE}px`)};
  right: ${({ rightSide }) => (rightSide ? `${1 * PIXEL_SIZE}px` : `auto`)};
  padding-left: ${({ rightSide }) => (rightSide ? `0` : `${3 * PIXEL_SIZE}px`)};
  padding-right: ${({ rightSide }) =>
    rightSide ? `${3 * PIXEL_SIZE}px` : `0`};
  background: linear-gradient(
    ${({ rightSide }) => (rightSide ? `270deg` : `90deg`)},
    rgba(198, 219, 222, 1) 0%,
    rgba(198, 219, 222, 1) 50%,
    rgba(198, 219, 222, 0) 100%
  );
  color: #fff;
  text-transform: uppercase;
  line-height: 2.5;
  text-align: ${({ rightSide }) => (rightSide ? `right` : `left`)};
  text-wrap: nowrap;

  &:after {
    content: "";
    width: ${1 * PIXEL_SIZE}px;
    height: 100%;
    background: rgba(198, 219, 222, 1);
    position: absolute;
    top: ${1 * PIXEL_SIZE}px;
    left: ${({ rightSide }) => (rightSide ? `100%` : `-${1 * PIXEL_SIZE}px`)};
    right: ${({ rightSide }) => (rightSide ? `0` : `100%`)};
  }
`;

const CardContent = styled.div`
  padding: ${4 * PIXEL_SIZE}px ${6 * PIXEL_SIZE}px;
  line-height: 2.5;
  z-index: 10;
`;

type CardBorderLayerProps = {
  pixelSize: number;
  borderSlice: number;
  svg: string;
};
const CardBorderLayer = styled.div<CardBorderLayerProps>`
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg, borderSlice }) => `${svg}) ${borderSlice}`};
  border-width: ${({ pixelSize }) => pixelSize}px;);
`;

type CardBackgroundLayerProps = {
  cornerLength: number;
  pixelSize: number;
  backgroundColor: string;
};
const CardBackgroundLayer = styled.div<CardBackgroundLayerProps>`
  position: absolute;
  top: 0px;
  left: ${({ pixelSize }) => pixelSize}px;
  height: 100%;
  width: calc(100% - ${({ pixelSize }) => 2 * pixelSize}px);
  z-index: 8;
  background-color: ${({ backgroundColor }) => backgroundColor};
  clip-path: polygon(
    0 calc(0% + ${({ cornerLength }) => cornerLength}px),
    calc(0% + ${({ cornerLength }) => cornerLength}px) 0,
    calc(100% - ${({ cornerLength }) => cornerLength}px) 0,
    100% ${({ cornerLength }) => cornerLength}px,
    100% calc(100% - ${({ cornerLength }) => cornerLength}px),
    calc(100% - ${({ cornerLength }) => cornerLength}px) 100%,
    ${({ cornerLength }) => cornerLength}px 100%,
    0% calc(100% - ${({ cornerLength }) => cornerLength}px),
    0% ${({ cornerLength }) => cornerLength}px
  );
`;

type CardProps = {
  children: React.ReactNode;
  title?: string;
  side?: "left" | "right";
};
function Card({ children, title, side = "left" }: CardProps) {
  const cornerLength = PIXEL_SIZE * 1;
  const borderSlice = 10;
  const backgroundColor = "#dfeded";

  return (
    <CardWrapper rightSide={side == "left"}>
      {title && <CardTitle rightSide={side == "left"}>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
      <CardBorderLayer
        pixelSize={PIXEL_SIZE}
        svg={cardBorderImage}
        borderSlice={borderSlice}
      />
      <CardBackgroundLayer
        cornerLength={cornerLength}
        pixelSize={PIXEL_SIZE}
        backgroundColor={backgroundColor}
      />
    </CardWrapper>
  );
}

export default Card;
