import styles from './Form.module.css'


function Form(){
    function Adicionar() {
        <p>para</p>
    }

    return(
        <div>
            <h1>Adicionar Tarefa</h1>
            <div  className={styles.form}>
                <input type="text" name="text" id="itexto" className={styles.form_dig}></input>
                <input 
                    type="submit" 
                    value="adicionar"
                    onClick={Adicionar()} 
                    className={styles.form_btn}/>
            </div>
        </div>
        
    )
}

export default Form