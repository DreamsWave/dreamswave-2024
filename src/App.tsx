import "./App.css";
import Parallax from "./components/Parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import LifeString from "./components/LifeString";

function App() {
  return (
    <ParallaxProvider>
      <main style={{ position: "relative" }}>
        <LifeString />
        <Parallax />
      </main>
    </ParallaxProvider>
  );
}

export default App;
