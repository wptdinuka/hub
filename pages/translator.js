import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'
import Translateform from '../components/Translate'







function Translator( {langueges} ) {
  const [inputText, setInputText] = useState('');
    const [detectLanguageKey, setdetectedLanguageKey] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [resultText, setResultText] = useState('');
console.log(langueges)





/*useEffect(() => {
  fetch("https://deep-translate1.p.rapidapi.com/language/translate/v2/languages", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  .then(data => {
    console.log(data);
  })

  
}, [])*/
const languageKey = (selectedLanguage) => {
  setLanguageKey(selectedLanguage.target.value)
}

const translateText = () => {
  getLanguageSource();

  let data = {
      q : inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey
  }
  axios.post(`https://libretranslate.de/translate`, data)
  .then((response) => {
      setResultText(response.data.translatedText)
  })
}


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


export const getStaticProps = async () => {
  const res = await fetch("https://deep-translate1.p.rapidapi.com/language/translate/v2/languages", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  
  const langueges = await res.json()
  return {
    props: {
      langueges
    }
  }
}

export default Translator