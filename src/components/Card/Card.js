import React from 'react';
import { HiLink } from 'react-icons/hi2';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Card(props) {

  return (

    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1
      }}
    >

      <a href={props.url} className="card__img-link" target="_blank" rel="noopener noreferrer">
        <img src={props.img[0]} alt={props.title} className="card__img" />
        <div className="card__overlay"></div>
      </a>

      <motion.div
        className="card__data"
        initial={{ x: props.x }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.2,
        }}
        viewport={{ once: true }}
      >

        <h2 className="card__heading">{props.title}</h2>
        <p className="card__description">{props.description}
        </p>

        <div className="car__link-box">
          <a href={props.github} className="card__link" target="_blank" rel="noopener noreferrer" title="view github repository">
            <BsGithub />
          </a>
          <a href={props.url} className="card__link" target="_blank" rel="noopener noreferrer" title="vew website">
            <HiLink />
          </a>
        </div>

      </motion.div>

    </motion.div>
  )
}

export default Card;
