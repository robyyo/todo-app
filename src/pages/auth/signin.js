import React from 'react';
import styles from '../../styles/Signin.module.css';

const signin = () => {
  return (
    <main className={styles.main}>
      <div className={styles.formWrapper}>
        <div className={styles.formTitle}>Sign In</div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>
            <button type="text">Sign in with Email</button>
          </div>
          <div className={styles.formSeparator}>
            <svg viewBox="0 0 100 1">
              <line x1="0" y1="0" x2="95" y2="0" stroke="#258599" />
            </svg>
            <span>or</span>
            <svg viewBox="0 0 100 1">
              <line x1="5" y1="0" x2="100" y2="0" stroke="#258599" />
            </svg>
          </div>
          <div className={styles.formGroup}>
            <button type="text">Sign in with Google</button>
            <button type="text">Sign in with Github</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default signin;
