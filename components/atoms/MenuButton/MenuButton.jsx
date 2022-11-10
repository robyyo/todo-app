import React from 'react';
import styles from './menubutton.module.css';
import { MdMenu, MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

const MenuButton = ({ open }) => {
  return (
    <>
      <div className={styles.menubuttonWrapper}>
        <div className={styles.menubuttonContainer}>
          {open ? (
            <a>
              <MdClose />
            </a>
          ) : (
            <MdMenu />
          )}
        </div>
      </div>
      {open ? <div>Im open!!</div> : <div>Closed</div>}
    </>
  );
};

export default MenuButton;
