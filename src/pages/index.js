import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function Home() {
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
          <div className={styles.ctaText}>
            <p>
              Do more of what you need to do, so you can do more of what you
              want to do. We can help!
            </p>
          </div>
          <div className={styles.ctaImgWrapper}>
            <Image
              alt="Github logo"
              src="/img/homepage-graphic.svg"
              width={380}
              height={190}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className={styles.ctaButtonWrapper}>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </main>
    </div>
  );
}
