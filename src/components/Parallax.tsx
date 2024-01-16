import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { getAspectRatio, getWindowDimensions } from "../utils";

import cloudBackgroundImage from "../assets/images/clouds/cloud-background.png";
import cloudLeftBottomImage from "../assets/images/clouds/cloud-left-bottom.png";
import cloudLeftTopImage from "../assets/images/clouds/cloud-left-top.png";
import cloudRightBottomImage from "../assets/images/clouds/cloud-right-bottom.png";
import cloudRightTopImage from "../assets/images/clouds/cloud-right-top.png";
import crystalBaseImage from "../assets/images/clouds/crystal-base.png";
import crystalImage from "../assets/images/clouds/crystal.png";
import mountainImage from "../assets/images/clouds/mountain.png";
import pillarLineImage from "../assets/images/clouds/pillar-line.png";

const PIXEL_SIZE = 5;

const aspectRatioParams = {
  maxAspectRatio: 2,
  minAspectRatio: 0.5,
  fullScreenWidth: 1920,
  mobileWidth: 480,
};

function Parallax() {
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
        image={cloudBackgroundImage}
        speed={-15}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={cloudLeftTopImage}
        speed={-10}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={cloudRightTopImage}
        speed={-5}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={mountainImage}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      {!isBreakpoint && (
        <ParallaxBannerLayer
          image={pillarLineImage}
          speed={0}
          shouldAlwaysCompleteAnimation={true}
          style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
        />
      )}
      <ParallaxBannerLayer
        image={crystalBaseImage}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={crystalImage}
        speed={0}
        translateY={[1, -3]}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={cloudLeftBottomImage}
        speed={2}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={cloudRightBottomImage}
        speed={5}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
    </ParallaxBanner>
  );
}

export default Parallax;
