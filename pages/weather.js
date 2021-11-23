import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

function Weather( {weather} ) {
  console.log(weather)
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainheader}>Weather</h1>
        

        <>
       <video 
      src="video/1.mp4"  
      autoPlay
      muted={true}  
      loop={true}
      id="myVideo" >
      
      </video>

      <div className={styles.wsummary} >

        <div className={styles.card} >
        <h3> Timezone: {weather.timezone} </h3>
        <h3> Longitude: {weather.longitude} </h3>
        <h3> Latitude: {weather.latitude} </h3>
        </div>

        <div className={styles.card} >
          <h2>Currently</h2>
        <h3> Summary: {weather.currently.summary} </h3>
        <h3> Prediction: {weather.currently.precipType} </h3>
        <h3> Temperature: {weather.currently.temperature} </h3>
        <h3> Humidity: {weather.currently.humidity} </h3>
        
        </div>
        </div>

        <div className={styles.daily} >
          <h2>Daily</h2>
        <h2> Summary: {weather.daily.summary} </h2>
        
        
        <ul className={styles.dailylist}>
        {weather.daily.data.map((item,id)  => (
          <li key={id} className={styles.dailycard} >
          <h3> Day: {id} </h3> 
          <h3> Summary: {item.summary} </h3> 
          <h3> Humidity: {item.humidity} </h3>
          <h3> Highest Temperature:{item.temperatureHigh} </h3>
          <h3> Lowest Temperature:{item.temperatureLow} </h3>
          </li>
        ))}
        </ul>

        </div>

    

       
      
        </>

      
        
      </main>

      
    </div>
  )
}



export const getStaticProps = async () => {
  const res = await fetch("https://dark-sky.p.rapidapi.com/+52.52437,+13.41053?units=auto&lang=en", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "dark-sky.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  
  const weather = await res.json()
  return {
    props: {
      weather
    }
  }
}


export default Weather