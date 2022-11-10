import React from 'react';
import styles from './tray.module.css';
import { MdClose } from 'react-icons/md';

const Tray = () => {
  return (
    <div className={styles.trayWrapper}>
      <div className={styles.trayHeader}>
        <h2>ToDo App</h2>
        <span className={styles.trayCloseButton}>
          <MdClose />
        </span>
      </div>
      <div className={styles.trayContent}>
        
      </div>
    </div>
  );
};

export default Tray;
