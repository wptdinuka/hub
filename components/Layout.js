import { Children } from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h1 className={styles.title}>
          daily.Utility<Link href="/">.[HUB]</Link>
        </h1>
         
             </div>
             <Navbar/>
            <main className={styles.main}>{children}</main>
            
      

      <footer className={styles.footer}>
         
      © Copyrights 2021
       
      </footer>
            
        </div>
    )
}
 
export default Layout