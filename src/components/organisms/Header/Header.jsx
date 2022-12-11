import React from 'react';
import Nav from '../../atoms/Nav/Nav';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <Link href="/">
          <div id="logo" className={styles.logo}>
            ToDo
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
