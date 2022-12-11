import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>ToDo App</title>
        <meta
          name="description"
          content="Simple ToDo app built with NextJS, NextAuth and MongoDB"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.ctaWrapper}>
          <p>
            Do more of what you need to do, so you can do more of what you want
            to do. We can help!
          </p>
          <div className={styles.ctaImgWrapper}></div>
          <div className={styles.ctaButtonWrapper}>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </main>
    </div>
  );
}
