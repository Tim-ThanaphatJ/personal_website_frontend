import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import { HOME_INTRO, NAV_LINKS, ANIMATION_TYPING_SPEED } from '@/config/constants';
import PictToPix from "@/utils/PictToPix";

export default function HomeSection() {
  const [state, setState] = useState({
    containerHeight: 0,
    typingDoneFirst: false,
    typingDoneSecond: false,
    typingDoneThird: false,
  });

  useEffect(() => {
    const updateContainerHeight = () => {
      const HOME_INTROContainer = document.getElementById("home-intro-container");
      if (HOME_INTROContainer) {
        setState((prev) => ({
          ...prev,
          containerHeight: HOME_INTROContainer.clientHeight,
        }));
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  return (
    <section id="home-section" className="home-section min-h-section w-full relative">
      <div className="min-h-section flex items-center justify-center">
        <div className="flex-1 hidden lg:flex justify-center items-center min-h-full">
          {state.containerHeight > 0 && <PictToPix />}
        </div>


        <div className="min-h-section flex flex-1 items-center relative">
          {/* 🔹 First Div: Background Text with Opacity */}
          <div
            id="home-intro-container"
            className="absolute opacity-10 mr-24 z-0"
          >
            <h1 className="text-2xl my-6">{HOME_INTRO.greeting}</h1>
            <strong className="text-5xl">{HOME_INTRO.name}</strong>
            <p className="text-lg my-6">{HOME_INTRO.description}</p>
            <button
              className="opacity-0 bg-transparent text-black py-4 px-12 my-6 border border-black"
              onClick={() => (window.location.href = `#${NAV_LINKS[1].refID}`)}
            >
              <span>Get started!</span>
            </button>
          </div>

          {/* 🔹 Second Div: Animated Text Overlaying the First One */}
          {state.containerHeight > 0 && (
            <div
              className="absolute mr-24 z-10"
              style={{ minHeight: `${state.containerHeight}px` }}
            >
              <TypeAnimation
                sequence={[HOME_INTRO.greeting, () => setState((prev) => ({ ...prev, typingDoneFirst: true }))]}
                speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                cursor={false}
                className="block text-2xl my-6"
              />

              {state.typingDoneFirst && (
                <TypeAnimation
                  sequence={[HOME_INTRO.name, () => setState((prev) => ({ ...prev, typingDoneSecond: true }))]}
                  wrapper="strong"
                  speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                  cursor={false}
                  className="block text-5xl"
                />
              )}

              {state.typingDoneSecond && (
                <TypeAnimation
                  sequence={[HOME_INTRO.description, () => setState((prev) => ({ ...prev, typingDoneThird: true }))]}
                  speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED - 5 }}
                  cursor={false}
                  className="block text-lg my-6"
                />
              )}

              {state.typingDoneThird && (
                <button
                  className="bg-transparent text-black border border-black py-4 px-12 my-6 dark:text-white dark:border-white"
                  onClick={() => (window.location.href = `#${NAV_LINKS[1].refID}`)}
                >
                  <TypeAnimation
                    sequence={["Get started!"]}
                    speed={{ type: "keyStrokeDelayInMs", value: ANIMATION_TYPING_SPEED }}
                    cursor={true}
                  />
                </button>

              )}
            </div>
          )}
        </div>
      </div>
    </section>

  );
}