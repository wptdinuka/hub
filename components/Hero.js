import styles from '../styles/Layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'



const Hero = () => {
  return (
    
      

      <main className={styles.hero}>
      

      <div className={styles.herocontainer}>
          
          <button  className={styles.herobutton}>
          <Link href="/weather"  >
            <a>
          <Image 
            src="/images/main1.jpg"
            priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/translator"  >
          <a>
          <Image 
            src="/images/main2.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          

          <button  className={styles.herobutton}>
          <Link href="/crypto"  >
          <a>
          <Image 
            src="/images/main3.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/mcu"  >
          <a>
          <Image 
            src="/images/main4.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/music"  >
          <a>
          <Image 
            src="/images/main5.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/notes"  >
          <a>
          <Image 
            src="/images/main6.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/memes"  >
          <a>
          <Image 
            src="/images/main7.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>

          <button  className={styles.herobutton}>
          <Link href="/currency"  >
          <a>
          <Image 
            src="/images/main8.jpg" priority
            width="250px"
            height="250px"
            layout="fixed" 
            alt="" />
            </a>
            </Link>
          </button>
         
      </div>
        
      </main>

      
  )
}

export default Hero











