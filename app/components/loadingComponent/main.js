import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SpinnerIcon from '../spinnerIcon/main.js';

import styles from './main.scss';
import fade from './animate.scss';

const LoadingComponent = () => {
  return (
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionName={'fade'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppearTimeout={500}
      >
    <div className={styles['loading-component']}>
      <div className={styles['loading-component__text']}>
        <span>Loading books illustrations...</span>
      </div>
      <div className={styles['loading-component__icon']}>
        <SpinnerIcon />
      </div>
    </div>
  </ReactCSSTransitionGroup>
  )
}

LoadingComponent.displayName = 'LoadingComponent';

export default LoadingComponent;
