import React from 'react';
import Link from 'next/link';
import MenuButton from '../MenuButton/MenuButton';
import styles from './nav.module.css';

const Nav = ({ user }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbutton}>
        <MenuButton />
      </div>
      <div className={styles.navbar}>
        {!user ? (
          <ul>
            <li className={styles.NavLink}>
              <Link href="#">About</Link>
            </li>
            <li className={styles.NavLink}>
              <Link href="#">Sign In</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className={styles.NavLink}>
              <Link href="#">About</Link>
            </li>
            <li className={styles.NavLink}>
              <Link href="#">Sign Out</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
