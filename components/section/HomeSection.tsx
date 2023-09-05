import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import { homeIntro, navLinks, animationTypingSpeed } from '@/constants';
import PictToPix from "@/utils/PictToPix";

export default function HomeSection() {
  const [containerHeight, setcontainerHeight] = useState(0)

  const [typingDoneFirst, setTypingDoneFirst] = useState(false);
  const [typingDoneSecond, setTypingDoneSecond] = useState(false);
  const [typingDoneThird, setTypingDoneThird] = useState(false);

  useEffect(() => {
    const homeIntroContainerHeight = document.getElementById("home-intro-container").clientHeight;
    setcontainerHeight(homeIntroContainerHeight)
    console.log(homeIntroContainerHeight);
  }, []);

  return (
    <div className="home-section min-h-section w-full" id="home-section">
      <div className="min-h-section flex items-center justify-center ml-24">
        <div className="flex-1 hidden lg:block">
          {(containerHeight != 0) && <PictToPix></PictToPix>}
        </div>
        <div className="min-h-section flex flex-1 items-center">
          <div id="home-intro-container" className="absolute opacity-25 mr-24">
            <div className="block text-[2em]">{homeIntro.greeting}</div>
            <strong className="block text-[4.9em]">{homeIntro.name}</strong>
            <div className="block text-[1.1em]">{homeIntro.description}</div>
            <button className="opacity-0 bg-transparent text-black py-4 px-12 my-6 border border-black border-solid" onClick={(e) => window.location.href = `#${navLinks[1].refID}`}>
              'Get started!'
            </button>
          </div>

          {
            (containerHeight != 0) && <div className={`absolute min-h-[${containerHeight}px] mr-24`}>
              <TypeAnimation
                sequence={[homeIntro.greeting, () => setTypingDoneFirst(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: animationTypingSpeed }}
                cursor={false}
                style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '2em' }}
              />
              {typingDoneFirst && <TypeAnimation
                sequence={[homeIntro.name, () => setTypingDoneSecond(true)]}
                wrapper="strong"
                speed={{ type: "keyStrokeDelayInMs", value: animationTypingSpeed }}
                cursor={false}
                style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '4.9em' }}
              />}
              {typingDoneSecond && <TypeAnimation
                sequence={[homeIntro.description, () => setTypingDoneThird(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: animationTypingSpeed - 5 }}
                cursor={false}
                style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '1.1em' }}
              />}

              {typingDoneThird && <button className="bg-transparent text-black py-4 px-12 my-6 border border-black border-solid" onClick={(e) => window.location.href = `#${navLinks[1].refID}`}>
                <TypeAnimation
                  sequence={['Get started!']}
                  speed={{ type: "keyStrokeDelayInMs", value: animationTypingSpeed }}
                  cursor={true}
                />
              </button>}
            </div>
          }
        </div>
      </div>
    </div >
  )
}