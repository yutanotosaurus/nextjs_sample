import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Quiz: NextPage = () => {
    const [data, setData] = useState('')
    const url = '/quiz.json'
    // custom hook化する
    useEffect(() => {
        async function fetchQuiz() {
            const res = await axios(url)
            setData(res.data)
        }
        fetchQuiz()
    }, [])
    console.log(data)
    return (
        <div className={styles.container}>
            <Head>
                <title>クイズ画面</title>
                <meta name="description" content="クイズ画面" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>クイズ設問画面</h1>
            </main>
        </div>
    )
}
export default Quiz
