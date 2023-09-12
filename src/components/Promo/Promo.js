import React from "react";
import { motion } from "framer-motion";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <motion.p
          className="promo__name"
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
            bounce: 0.4,
          }}
        >
          Nikita Titov
        </motion.p>
        <h1 className="promo__heading">FRONT-END DEVELOPER</h1>
        <p className="promo__description">Here you can find some of my latest works<br/> Scroll down to view them</p>
        <a className="promo__circle-wrapper" href="#works" title="go to the works"
        >
          <svg viewBox="0 0 100 100" className="promo__circle usage__circle">
            <defs>
              <path
                id="circle"
                d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="promo__circle-text">
              <textPath href="#circle" textLength="235">
              &#160; WORKS &#160; PROJECTS &#160; WORKS &#160;
              </textPath>
            </text>
          </svg>
        </a>
      </div>

    </div>
  )
}

export default Promo;
