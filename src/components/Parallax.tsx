import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const imageLocation = "../assets/images/clouds";

const PIXEL_SIZE = 5;

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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const mobileStyles = {
  //   width: "200%",
  //   aspectRatio: "1/1",
  //   transform: "translateX(-47%)",
  // };
  return (
    <ParallaxBanner
      style={{
        aspectRatio: "2/1",
        position: "absolute",
        top: `calc(100% - ${
          isTabletOrMobile ? 60 * PIXEL_SIZE : 80 * PIXEL_SIZE
        }px)`,
        // ...(isTabletOrMobile && mobileStyles),
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
      <ParallaxBannerLayer
        image={IMAGES.pillarLine}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      {/* <ParallaxBannerLayer
        image={IMAGES.crystalGlow}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      />
      <ParallaxBannerLayer
        image={IMAGES.crystalLight}
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        style={{ backgroundSize: "2560px", backgroundRepeat: "no-repeat" }}
      /> */}
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
