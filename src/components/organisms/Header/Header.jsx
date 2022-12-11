import React from 'react';
import Nav from '../../atoms/Nav/Nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div id="logo" className={styles.logo}>ToDo</div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
