import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './main.scss';
import fade from './animate.scss';


const BookCard = ({ title, img, description }) => {

  return (
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionName={'fade'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppearTimeout={500}
      >
    <div className={styles['book-card']}>
      <div className={styles['book-card__image']}>
        <img src={img} />
      </div>
      <div className={styles['book-card__title']}>
        <h3>{title}</h3>
      </div>
      <div className={styles['book-card__description']}>
        <p>{description}</p>
      </div>
    </div>
  </ReactCSSTransitionGroup>
  )
}

BookCard.displayName = 'BookCard';

export default BookCard;
