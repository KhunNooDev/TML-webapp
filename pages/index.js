import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { isAuth } from '../actions/auth'

const Home = () => {
  return (
    <>
      <Head>
        <title>TouchMyLike</title>
        <meta name="keywords" content="TouchMyLike" />
        <link rel="icon" href="/image/touchmylike_logo.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TML!</a> <br />
          { isAuth() }
        </h1>
      </div>
    </>

  )
}

export default Home
