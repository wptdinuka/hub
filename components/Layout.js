import { useState } from 'react'
import { Children } from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'
import Link from 'next/link'

const Layout = ({children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
    return (
        <div className={styles.container}>
          <main className={darkTheme ? 'dark' : ''}>
       <div className=" dark:bg-gray-900 bg-gray-100 black min-h-screen">
            <div className={styles.header}>
            <h1 className={styles.title}>
          daily.Utility<Link href="/">.[HUB]</Link>
        </h1>

        
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="ml-10 text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-md px-4 py-3 hover:shadow-lg">{darkTheme ? 'Light-Mode' : 'Dark-Mode'}</button>
         
             </div>
             <Navbar/>
            <main className={styles.main}>{children}</main>
            
      

      <footer className={styles.footer}>
         
      © Copyrights 2021
       
      </footer>

      </div>

       
        
      </main>
            
        </div>
    )
}
 
export default Layout