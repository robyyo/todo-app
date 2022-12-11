import Head from 'next/head';
import Image from 'next/image';
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
        <div className={styles.contentWrapper}>
          <p>
            Simple ToDo application using NextJS, NextAuth and MongoDB. Check
            out the GitHub repository here.
          </p>
          <p>
            I&apos;d love to know what you think. Reach out at any of my forms
            of contact below!
          </p>
          <div className={styles.ctaImgWrapper}>
            <Image
              alt="Github logo"
              src="/img/aboutpage-graphic.svg"
              width={380}
              height={190}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
