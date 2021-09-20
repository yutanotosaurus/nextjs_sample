import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>クイズアプリ</title>
        <meta name="description" content="クイズアプリメイン画面" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          クイズアプリへようこそ
        </h1>

        <p className={styles.description}>
          これはNext.js練習用アプリです。{' '}
        </p>

        <div className={styles.grid}>
          <a href="/quiz" className={styles.card}>
            <h2>クイズ画面へ &rarr;</h2>
            <p>クイズ画面へ遷移できます。クイズをお楽しみください。</p>
          </a>

          <a href="/howToPlay" className={styles.card}>
            <h2>クイズ画面の遊び方へ &rarr;</h2>
            <p>クイズの遊び方の説明画面へ遷移できます。</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Powered by{' '} Yuta</p>
      </footer>
    </div>
  )
}

export default Home
