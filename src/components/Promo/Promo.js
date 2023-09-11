import React from 'react';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container'>
        <p className='promo__name'>Nikita Titov</p>
        <h1 className='promo__heading'>FRONT-END DEVELOPER</h1>
        <p className='promo__description'>Here you can find some of my latest works<br/> Scroll down to view them</p>
        <a className="promo__circle-wrapper" to="/#contact" title="go to the works">
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
