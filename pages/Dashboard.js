import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>TouchMyLike</title>
        <meta name="keywords" content="TouchMyLike" />
        <link rel="icon" href="/image/touchmylike_logo.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>
            Dashboard...
        </h1>
      </div>
    </>

  )
}

export default Dashboard
