import React, { useEffect } from "react";
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   Sticky,
// } from "react-scroll-motion";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import MainSection from "./components/MainSection";
import Second from "./components/Second";
import secondimg from "./assets/images/cross.png";
import bodybackground from "./assets/images/body-background.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import { useState } from "react";
import About from "./components/About";
import Services from "./components/Services";
import ContectUs from "./components/ContectUs";
import Partners from "./components/Partners";

const ZoomInScrollOut = batch(
  Sticky(),
  Fade(0, 1),

  Zoom(0, 1)
);

export const Test = () => {
  //   const [position, setPosition] = useState();
  //   useEffect(() => {
  //     console.log(position);

  //     setPosition(window.pageYOffset);
  //   });

  return (
    <>
      <Header />
      <Popup onTop={window.pageYOffset > 10 ? false : true} />
      <ScrollContainer
        style={{
          backgroundImage: `url(${bodybackground})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <ScrollPage page={0}>
          <Animator
            animation={batch(
              Sticky(),
              FadeOut(1, -1),
              MoveOut(0, -1000),
              ZoomOut(1, 0)
            )}
          >
            <MainSection />
          </Animator> */}

        <ScrollPage page={0}>
          <Animator animation={ZoomInScrollOut}>
            <MainSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Sticky(), Fade(0, 1), Zoom(0, 1))}>
            <img
              src={secondimg}
              style={{
                minHeight: "100vh",
                minWidth: "100vw",
              }}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={ZoomInScrollOut}>
            <About />
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={ZoomInScrollOut}>
            <Services />
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={ZoomInScrollOut}>
            <ContectUs />
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={ZoomInScrollOut}>
            <Partners />
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <Footer />
    </>
  );
};
