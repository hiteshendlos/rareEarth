import { useRef } from "react";
import moon from "./moon.png";

import bodybackground from "./assets/images/body-background.png";
import land from "./land.png";
import cat from "./cat.gif";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import ContectUs from "./components/ContectUs";

import React, { useState, useEffect } from "react";

import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";
import Second from "./components/Second";
import Popup from "./components/Popup";
import { Test } from "./test";
import Partners from "./components/Partners";

function App() {
  const ref = useRef();

  // const { x, y } = useScrollPosition();
  // const scrollX = useScrollXPosition();
  // const scrollY = useScrollYPosition();

  // useEffect(() => {
  //   console.log(x, y);
  //   console.log(scrollX);
  //   console.log(scrollY);
  // }, [scrollX]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log(window.scrollY);
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

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
      {/* <div
        style={{
          backgroundImage: `url(${bodybackground})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Popup onTop={false} />
        <Header />
        <MainSection />
        <Second />
        <About />
        <ContectUs />
        <Footer />
      </div> */}

      <Test />

      {/* <Partners /> */}
    </>
  );
}

export default App;

// {/* <div>
//   {/* <Header /> */}
//   <Parallax
//     pages={4}
//     ref={ref}
//     style={{
//       backgroundImage: `url(${bodybackground})`,
//       backgroundSize: "cover",
//       backgroundAttachment: "fixed",
//     }}
//   >
//     {/* <ParallaxLayer speed={1}>
//        <h2>Welcome to my website</h2>
//    </ParallaxLayer>

//    <ParallaxLayer offset={1} speed={0.5}>
//        <h2>Web development is fun!</h2>
//    </ParallaxLayer> */}

//     {/* <ParallaxLayer offset={0} speed={1} factor={2} /> */}

//     <ParallaxLayer
//       offset={0}
//       sticky={{ start: 0, end: 6 }}
//       // sticky={{ start: 0.9 }}
//       // style={{ position: "fixed", top: 0, left: 0 }}
//     >
//       <Header />
//     </ParallaxLayer>

//     <ParallaxLayer
//       offset={0.1}
//       speed={1}
//       factor={4}
//       // style={{
//       //   backgroundImage: `url(${land})`,
//       //   backgroundSize: "cover",
//       //   backgroundAttachment: "fixed",
//       // }}
//     >
//       <div
//         style={{
//           height: "100px",
//         }}
//       >
//         <MainSection />
//       </div>
//     </ParallaxLayer>

//     {/* <ParallaxLayer
//      sticky={{ start: 0.9, end: 2.5 }}
//      style={{ textAlign: 'center' }}
//    >
//      <img src={cat} />
//    </ParallaxLayer> */}

//     <ParallaxLayer
//       offset={1.2}
//       speed={0.2}
//       onClick={() => ref.current.scrollTo(3)}
//     >
//       {/* <h2 style={{ color: "red" }}>Welcome to my website</h2> */}
//       <About />
//     </ParallaxLayer>

//     <ParallaxLayer
//       offset={3}
//       speed={2}
//       onClick={() => ref.current.scrollTo(0)}
//     >
//       <h2>Hi Mom!</h2>
//     </ParallaxLayer>
//   </Parallax>

//   <Footer />
// </div>; */}
