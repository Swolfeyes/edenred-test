import React from 'react';

import styles from './main.scss';

const ErrorComponent = () => {
  return (
    <div className={styles['error-component']}>
      <div className={styles['error-component__text']}>
        <span>Couldn't retrieve books</span>
      </div>
    </div>
  )
}

ErrorComponent.displayName = 'ErrorComponent';

export default ErrorComponent;
