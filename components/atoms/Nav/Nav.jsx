import React from 'react';
import Link from 'next/link';
import styles from './nav.module.css';

const Nav = ({ user }) => {
  user ? (
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
        <Link href="#">Sign In</Link>
      </li>
    </ul>
  );
};

export default Nav;
