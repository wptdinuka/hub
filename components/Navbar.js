import Link from 'next/link'
import styles from '../styles/Layout.module.scss'




export const Navbar = () => {

    

    return (

        
<div className={styles.navbarcontainer}>


<button className="btn btn-primary" 
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasWithBothOptions" 
        aria-controls="offcanvasWithBothOptions">
            hub.[Routes]
</button>

<div className="offcanvas offcanvas-start" 
     data-bs-scroll="true" data-bs-backdrop="false" 
     tabIndex="-1" id="offcanvasScrolling" 
     aria-labelledby="offcanvasScrollingLabel">

 
</div>
<div className="offcanvas offcanvas-start" 
     tabIndex="-1" id="offcanvasWithBackdrop" 
     aria-labelledby="offcanvasWithBackdropLabel">
</div>

<div className="offcanvas offcanvas-start" 
     data-bs-scroll="true" tabIndex="-1" 
     id="offcanvasWithBothOptions" 
     aria-labelledby="offcanvasWithBothOptionsLabel">
 
<div className="offcanvas-header">
    <h5 className="offcanvas-title" 
        id="offcanvasWithBothOptionsLabel">
            daily.Utility.[HUB]
    </h5>
    <button type="button" className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" aria-label="Close">
    </button>
  </div>
  <div className="offcanvas-body">

    
    <ul className={styles.navbarlist}>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/"  >
            Home
            </Link>
        </li>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/weather"  >
            Weather Updates
            </Link>
        </li>
        
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/crypto"  >
            Crypto Currency
            </Link>
        </li>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/mcu"  >
            MCU Countdown
            </Link>
        </li>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/music"  >
            Music
            </Link>
        </li>
        
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/notes"  >
            Notes
            </Link>
        </li>

        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/memes"  >
            Daily Memes
            </Link>
        </li>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/currency"  >
           Currency Converter
            </Link>
        </li>
        <li className={styles.navbaritem} type="button" 
            data-bs-dismiss="offcanvas" aria-label="Close">
        <Link href="/translator"  >
            Translator
            </Link>
        </li>
        
    </ul>

    
  </div>
</div>
</div>
    )
}
export default Navbar


