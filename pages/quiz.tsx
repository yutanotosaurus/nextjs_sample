import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'

<<<<<<< HEAD
const Quiz: NextPage = () =>{
    const [data, setData] = useState('');
    const url = "/quiz.json";
    axios.get(url).then(res => {
        //console.log(res.data);
        setData(res.data);
      });
    return(
=======
const Quiz: NextPage = () => {
    const [data, setData] = useState(null)
    const url = './public/quiz.json'
    axios.get(url).then((res) => {
        //setData(res.data);
        console.log(data)
        console.log(res.data)
    })
    return (
>>>>>>> 489381df708e1294436121cc56285f09c30b9dbf
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
