import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const howToPlay: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>クイズの遊び方</title>
                <meta name="description" content="クイズ画面遊び方画面" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>クイズの説明画面</h1>
                <p className={styles.description}>クイズ説明ここに書く</p>
            </main>
            <footer className={styles.footer}>
                <p>Powered by Yuta</p>
            </footer>
        </div>
    )
}

export default howToPlay
