import React, { useState } from 'react';
import styles from './tray.module.css';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

const Tray = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.trayWrapper}>
      <div className={styles.trayHeader}>
        <h2>ToDo App</h2>
        <button className={styles.trayCloseButton} onClick={handleOnClick}>
          <MdClose />
        </button>
      </div>
      <div className={styles.trayContent}>
        <div className={styles.navbar}>
          {!user ? (
            <ul>
              <li className={styles.navLink}>
                <Link href="#">About</Link>
              </li>
              <li className={styles.navLink}>
                <Link href="#">Sign In</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li className={styles.navLink}>
                <Link href="#">About</Link>
              </li>
              <li className={styles.navLink}>
                <Link href="#">Sign Out</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tray;
