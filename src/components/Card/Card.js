import React from 'react';
import { HiLink } from 'react-icons/hi2';
import { BsGithub } from 'react-icons/bs';

function Card(props) {

  return (

    <div className="card">

      <a href={props.url} className="card__img-link" target="_blank" rel="noopener noreferrer">
        <img src={props.img[0]} alt={props.title} className="card__img" />
        <div className="card__overlay"></div>
      </a>

      <div className="card__data">

        <h2 className="card__heading">{props.title}</h2>
        <p className="card__description">{props.description}
        </p>

        <div className='car__link-box'>
          <a href={props.github} className="card__link" target="_blank" rel="noopener noreferrer" title="view github repository">
            <BsGithub />
          </a>
          <a href={props.url} className="card__link" target="_blank" rel="noopener noreferrer" title="vew website">
            <HiLink />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Card;
