import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  const ref = useRef();

  return (
    // <div>
    //   <Parallax
    //     pages={4}
    //     ref={ref}
    //     style={{
    //       backgroundImage: `url(${moon})`,
    //       backgroundSize: "cover",
    //       backgroundAttachment: "fixed",
    //     }}
    //   >
    //     {/* <ParallaxLayer speed={1}>
    //         <h2>Welcome to my website</h2>
    //     </ParallaxLayer>

    //     <ParallaxLayer offset={1} speed={0.5}>
    //         <h2>Web development is fun!</h2>
    //     </ParallaxLayer> */}

    //     <ParallaxLayer offset={0} speed={1} factor={2} />

    //     <ParallaxLayer
    //       offset={2}
    //       speed={1}
    //       factor={4}
    //       // style={{
    //       //   backgroundImage: `url(${land})`,
    //       //   backgroundSize: "cover",
    //       //   backgroundAttachment: "fixed",
    //       // }}
    //     ></ParallaxLayer>

    //     {/* <ParallaxLayer
    //       sticky={{ start: 0.9, end: 2.5 }}
    //       style={{ textAlign: 'center' }}
    //     >
    //       <img src={cat} />
    //     </ParallaxLayer> */}

    //     <ParallaxLayer
    //       offset={0.2}
    //       speed={0.05}
    //       onClick={() => ref.current.scrollTo(3)}
    //     >
    //       <h2>Welcome to my website</h2>
    //     </ParallaxLayer>

    //     <ParallaxLayer
    //       offset={3}
    //       speed={2}
    //       onClick={() => ref.current.scrollTo(0)}
    //     >
    //       <h2>Hi Mom!</h2>
    //     </ParallaxLayer>
    //   </Parallax>
    // </div>

    <>
      {/* <Header /> */}
      {/* 
      <MainSection /> */}

      <Footer />
    </>
  );
}

export default App;
