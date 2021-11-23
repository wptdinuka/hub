import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

function Translator() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Translator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainheader}>Translator</h1>
        

      
        
      </main>

      
    </div>
  )
}


export default Translator