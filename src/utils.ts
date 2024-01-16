export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

type getAspectRatioParams = {
  maxAspectRatio: number;
  minAspectRatio: number;
  currentWidth?: number;
  mobileWidth: number;
  fullScreenWidth: number;
};

export const getAspectRatio = ({
  maxAspectRatio = 2,
  minAspectRatio = 0.6,
  currentWidth = getWindowDimensions().width,
  mobileWidth = 320,
  fullScreenWidth = 1920,
}: getAspectRatioParams) => {
  const aspectRatio =
    ((maxAspectRatio - minAspectRatio) *
      Math.max(0, currentWidth - mobileWidth)) /
      (fullScreenWidth - mobileWidth) +
    minAspectRatio;
  return aspectRatio;
};
