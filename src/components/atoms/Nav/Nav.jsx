import React, { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
import { MdMenu, MdClose } from 'react-icons/md';

const Nav = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleMenuBtnOnClick = () => {
    setOpen(!open);
  };

  const handleTrayOnClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.nav}>
      <div className="menuButtonWrapper">
        <button className={styles.menuButton} onClick={handleMenuBtnOnClick}>
          {!open ? <MdMenu /> : <MdClose />}
        </button>
      </div>
      <div className={styles.navbar}>
        {!user ? (
          <ul>
            <li className={styles.navLink}>
              <Link href="/about" onClick={handleTrayOnClick}>
                About
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/auth/signin" onClick={handleTrayOnClick}>
                Sign In
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className={styles.navLink}>
              <Link href="/about" onClick={handleTrayOnClick}>
                About
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link href="#">Sign Out</Link>
            </li>
          </ul>
        )}
      </div>
      {!open ? (
        <></>
      ) : (
        <div className={styles.trayWrapper}>
          <div className={styles.trayHeader}>
            <div className={styles.logo}>ToDo</div>
            <button
              className={styles.trayCloseButton}
              onClick={handleTrayOnClick}
            >
              <MdClose />
            </button>
          </div>
          <div className={styles.trayContent}>
            <div className={styles.trayNavbar}>
              {!user ? (
                <ul>
                  <li className={styles.navLink}>
                    <Link href="/about" onClick={handleTrayOnClick}>
                      About
                    </Link>
                  </li>
                  <li className={styles.navLink}>
                    <Link href="/auth/signin" onClick={handleTrayOnClick}>
                      Sign In
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className={styles.navLink}>
                    <Link href="/about" onClick={handleTrayOnClick}>
                      About
                    </Link>
                  </li>
                  <li className={styles.navLink}>
                    <Link href="#">Sign Out</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
