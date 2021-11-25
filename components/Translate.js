import styles from '../styles/Layout.module.scss'


function Translateform(props) {


    const {
        langueges
    } = props

    return (
        <div className={styles.translator} >
        <select>
        
        </select>
        <input placeholder="Type to Translate" />
        <button>Translate</button>
        <input placeholder="Translation" />


        </div>
    )
}

export default Translateform