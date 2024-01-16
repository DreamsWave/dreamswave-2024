import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { getAspectRatio, getWindowDimensions } from "../utils";

const imageLocation = "../assets/images/clouds";

const PIXEL_SIZE = 5;

const aspectRatioParams = {
  maxAspectRatio: 2,
  minAspectRatio: 0.5,
  fullScreenWidth: 1920,
  mobileWidth: 480,
};

const IMAGES = {
  cloudBackground: new URL(
    `${imageLocation}/cloud-background.png`,
    import.meta.url
  ).href,
  cloudLeftBottom: new URL(
    `${imageLocation}/cloud-left-bottom.png`,
    import.meta.url
  ).href,
  cloudLeftTop: new URL(`${imageLocation}/cloud-left-top.png`, import.meta.url)
    .href,
  cloudRightBottom: new URL(
    `${imageLocation}/cloud-right-bottom.png`,
    import.meta.url
  ).href,
  cloudRightTop: new URL(
    `${imageLocation}/cloud-right-top.png`,
    import.meta.url
  ).href,
  mountain: new URL(`${imageLocation}/mountain.png`, import.meta.url).href,
  crystal: new URL(`${imageLocation}/crystal.png`, import.meta.url).href,
  crystalLine: new URL(`${imageLocation}/crystal-line.png`, import.meta.url)
    .href,
  crystalBase: new URL(`${imageLocation}/crystal-base.png`, import.meta.url)
    .href,
  crystalGlow: new URL(`${imageLocation}/crystal-glow.png`, import.meta.url)
    .href,
  crystalLight: new URL(`${imageLocation}/crystal-light.png`, import.meta.url)
    .href,
  pillarLine: new URL(`${imageLocation}/pillar-line.png`, import.meta.url).href,
};

function BGEnd() {
  const [aspectRatio, setAspectRatio] = useState(
    `${getAspectRatio({
      ...aspectRatioParams,
      currentWidth: getWindowDimensions().width,
    })}/1`
  );
  const isBreakpoint = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    function handleResize() {
      setAspectRatio(
        `${getAspectRatio({
          ...aspectRatioParams,
          currentWidth: getWindowDimensions().width,
        })}/1`
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ParallaxBanner
      style={{
        aspectRatio,
        position: "absolute",
        top: `calc(100% - ${80 * PIXEL_SIZE}px)`,
      }}
    >
      <ParallaxBannerLayer
        image={IMAGES.cloudBackground}
        speed={-15}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.cloudLeftTop}
        speed={-10}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.cloudRightTop}
        speed={-5}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.mountain}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      {!isBreakpoint && (
        <ParallaxBannerLayer
          image={IMAGES.pillarLine}
          speed={0}
          shouldAlwaysCompleteAnimation={true}
          style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
        />
      )}
      <ParallaxBannerLayer
        image={IMAGES.crystalBase}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.crystal}
        speed={0}
        translateY={[1, -3]}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.cloudLeftBottom}
        speed={2}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.cloudRightBottom}
        speed={5}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
    </ParallaxBanner>
  );
}

export default BGEnd;
