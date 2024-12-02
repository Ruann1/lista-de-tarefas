import styles from './Form.module.css'

function Input(type, placeHolder){
    return(
        <div>
                <input type={type} 
                placeholder={placeHolder} />
        </div>
    )
}

export default Input


/* <input type="submit" value="adicionar" onClick={Adicionar()}className={styles.form_btn}/> */