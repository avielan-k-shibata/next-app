import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const Home: NextPage = () => {
  return (

    <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className={styles.container}>
        <div>Welcome to Next.js!</div>
        <Link href="/about">
        <a>about</a>
      </Link>
      </div>
      <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <div className="flex flex-wrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
    </>
  )
}

export default Home
