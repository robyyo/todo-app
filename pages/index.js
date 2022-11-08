import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo App</title>
        <meta
          name="description"
          content="Simple ToDo app built with NextJS, NextAuth and MongoDB"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <h1 className={styles.logo}>ToDo</h1>
    </div>
  );
}
