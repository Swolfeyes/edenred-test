import React from 'react';

import styles from './main.scss';

const Header = ({ title }) => {
  return (
    <div className={styles['header']}>
      <h1>{title}</h1>
    </div>
  )
}

Header.displayName = 'Header';

export default Header;
