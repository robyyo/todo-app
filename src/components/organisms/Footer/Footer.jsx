import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerLinksWrapper}>
        <ul className={styles.sociallinks}>
          <li className={styles.link}>
            <a href="https://github.com/robyyo">
              <Image
                alt="Github logo"
                src="/img/github-logo.svg"
                width={50}
                height={50}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
