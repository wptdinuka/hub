import styles from '../styles/Layout.module.scss'



function Currencyrow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props


    return (
        
        <div>
            <input className={styles.currencyinput} type='number' value={amount} onChange={onChangeAmount} />
            <select className={styles.currencyselect} value={selectedCurrency} onChange={onChangeCurrency} >
                {currencyOptions.map(option => (
                    <option key={option} value={option}> {option}</option>

                ))}
                
            </select>
        </div>

       
    )
}

export default Currencyrow