import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import github from '../../images/GitHub-Mark-Light-64px.png';
import siteLink from '../../images/icons8-внешняя-ссылка-30.png';

function Card(props) {

  return (

    <div className="card">
      <Splide
        options={{
          width: '45%',
          perPage: 1,
          perMove: 1,
          pagination: false,
          type: 'loop',
          autoplay: true,
          interval: 3000 + (Math.random() * 1000),
          speed: 900,
          breakpoints: {
            780: {
              width: '80%'
            },
            600: {
              width: '100%'
            }
          }
        }}
      >
        {props.img.map((j, index) => (
          <SplideSlide key={index}>
            <a href={props.url} className="card__img-link" target="_blank" rel="noopener noreferrer">
              <img src={j} alt={props.title} className="card__img" />
              <div className="card__overlay"></div>
            </a>

          </SplideSlide>
        ))}

      </Splide>
      <div className="card__data">
        <h2 className="card__heading">{props.title}</h2>
        <p className="card__description">{props.description}
        </p>
        <ul className="card__ul">
          {props.techs.map((i) => {
            return (
              <li key={i}>{i}</li>
            )
          })}
        </ul>
        <a href={props.github} className="card__link" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github logo"></img>
        </a>
        <a href={props.url} className="card__link" target="_blank" rel="noopener noreferrer">
          <img src={siteLink} alt="link logo"></img>
        </a>
      </div>
    </div>
  )
}

export default Card;
