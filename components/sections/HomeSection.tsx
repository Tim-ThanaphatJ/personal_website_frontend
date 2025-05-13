import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { HOME_INTRO, NAV_LINKS, ANIMATION_TYPING_SPEED } from "@/config/constants";
import PictToPix from "@/utils/PictToPix";

export default function HomeSection() {
  const [state, setState] = useState({
    containerHeight: 0,
    typingDoneFirst: false,
    typingDoneSecond: false,
    typingDoneThird: false,
    showCanvas: false,
    isMobileView: false,
  });

  useEffect(() => {
    const widthOK = window.innerWidth > 1024;
    const userAgent = navigator.userAgent.toLowerCase();
    const isDesktop =
      /windows|macintosh|linux/i.test(userAgent) &&
      !("ontouchstart" in window || navigator.maxTouchPoints > 1);

    const showCanvas = isDesktop && widthOK;
    setState((prev) => ({
      ...prev,
      showCanvas,
      isMobileView: !widthOK,
    }));

    const updateContainerHeight = () => {
      const HOME_INTROContainer = document.getElementById("home-intro-container");
      if (HOME_INTROContainer) {
        setState((prev) => ({
          ...prev,
          containerHeight: HOME_INTROContainer.clientHeight,
        }));
      }
    };

    const handleResize = () => {
      const widthOK = window.innerWidth > 1024;
      const isDesktop =
        /windows|macintosh|linux/i.test(navigator.userAgent.toLowerCase()) &&
        !("ontouchstart" in window || navigator.maxTouchPoints > 1);
      const showCanvas = isDesktop && widthOK;

      setState((prev) => ({
        ...prev,
        showCanvas,
        isMobileView: !widthOK,
      }));
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home-section" className="home-section min-h-section w-full relative">
      <div className="min-h-section flex flex-col lg:flex-row items-center justify-center">
        {state.containerHeight > 0 && state.showCanvas && (
          <div className="flex-1 hidden lg:flex justify-center items-center min-h-full">
            <PictToPix />
          </div>
        )}

        <div className="flex-1 flex justify-center items-center w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="relative w-full max-w-3xl" style={{ minHeight: `${state.containerHeight}px` }}>
            <div id="home-intro-container" className="opacity-10 absolute w-full">
              <h1 className="text-2xl sm:text-3xl my-6">{HOME_INTRO.greeting}</h1>
              <strong className="text-5xl sm:text-6xl block">{HOME_INTRO.name}</strong>
              <p className="text-lg sm:text-xl my-6">{HOME_INTRO.description}</p>
              <button
                className="opacity-0 bg-transparent text-black py-4 px-12 my-6 border border-black"
                onClick={() => (window.location.href = `#${NAV_LINKS[1].refID}`)}
              >
                <span>Get started!</span>
              </button>
            </div>

            <div className="absolute w-full z-10">
              <TypeAnimation
                sequence={[HOME_INTRO.greeting, () => setState((prev) => ({ ...prev, typingDoneFirst: true }))]}
                speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                cursor={false}
                className="block text-2xl sm:text-3xl my-6"
              />

              {state.typingDoneFirst && (
                <TypeAnimation
                  sequence={[HOME_INTRO.name, () => setState((prev) => ({ ...prev, typingDoneSecond: true }))]}
                  wrapper="strong"
                  speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                  cursor={false}
                  className="block text-5xl sm:text-6xl"
                />
              )}

              {state.typingDoneSecond && (
                <TypeAnimation
                  sequence={[HOME_INTRO.description, () => setState((prev) => ({ ...prev, typingDoneThird: true }))]}
                  speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED - 5 }}
                  cursor={false}
                  className="block text-lg sm:text-xl my-6"
                />
              )}

              {state.typingDoneThird && (
                <button
                  className="relative bg-transparent text-black border border-black py-4 px-12 my-6 dark:text-white dark:border-white transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:bg-[rgba(224,224,224,0.5)] dark:hover:bg-[rgba(17,34,64,0.7)] hover:text-black dark:hover:text-white shadow-md hover:shadow-[0px_0px_15px_rgba(0,0,0,0.25)] dark:hover:shadow-[0px_0px_15px_rgba(100,255,218,0.6)] active:scale-95"
                  onClick={() => (window.location.href = `#${NAV_LINKS[1].refID}`)}
                >
                  <span className="relative z-10">
                    <TypeAnimation
                      sequence={["Get started!"]}
                      speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                      cursor={true}
                    />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
