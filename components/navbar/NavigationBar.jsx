import { useState, useEffect } from "react";
import ScrollOut from "scroll-out";

import { navLinks } from '@/constants'
import ThemeSwitcher from "@/app/ThemeSwitcher";

function concatObjToTargetStr(navlinks){
  let _arr = [];
  for (let idx in navlinks) _arr.push(`#${navlinks[idx].refID}`)

  return _arr.join()
}

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const [classCurrentPage, setClassCurrentPage] = useState(navLinks[0].refID)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    ScrollOut({
      threshold: 0.5,
      targets: concatObjToTargetStr(navLinks),
      onShown: function (element) {
        for (let idx in navLinks) if (element.id == navLinks[idx].refID) setClassCurrentPage(navLinks[idx].sectionButton)
      }
    });
  }, []);

  return (
    <div id="navigation-container">
      <div id="logo-container">
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <div id="menu-container">
        <div id="menu-icon" onClick={handleClick}>
          <span>
            {click ? (
              // cancel icon
              <svg viewBox="0 0 492 492" id="Layer_1" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"></path> </g> </g> </g></svg>
            ) : (
              // menu icon
              <svg viewBox="0 0 50 50" x="0px" y="0px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>
            )}
          </span>
        </div>
        <nav id="item-container">
          {navLinks.length ? (
            <ul className={click ? "active" : ""}>
              {navLinks.map((item, index) => (
                <li key={item.displayName} onClick={closeMobileMenu}>
                  {
                    // home icon
                    index == 0 ? (
                      <svg key={item.displayName} fill="#fff" version="1.1" id="Capa_1" viewBox="0 0 495.398 495.398"><g><g><g><path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391     v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158     c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747     c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" /><path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401     c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" /></g></g></g></svg>
                    ) : null}
                  <a href={`#${item.refID}`}>{item.displayName}</a>
                </li>
              ))}
              <li className={`animation-button ${classCurrentPage}`}></li>
            </ul>
          ) : null}
        </nav>
      </div>
    </div >
  )
}

export default NavigationBar