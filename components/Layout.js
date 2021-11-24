import { Children } from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h1 className={styles.title}>
          daily.Utility<a href="/">.[HUB]</a>
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