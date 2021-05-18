import styles from '../styles/Home.module.css'
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>TouchMyLike</title>
        <meta name="keywords" content="TouchMyLike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TML!</a>
        </h1>
      </div>
    </>

  );
}

export default Home;
