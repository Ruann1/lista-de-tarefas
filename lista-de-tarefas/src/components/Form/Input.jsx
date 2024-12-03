import styles from './Input.module.css'
import { useState } from 'react'

function Input(){

    function Adicionar(e){
        e.preventDefault()
        
    }

    const [tarefa, setTarefa] = useState('')

    return(
        <div className={styles.input}>


                <form onSubmit={Adicionar}>
                    <input type='text'
                    id='itexto'
                    placeholder='Digite sua tarefa aqui'
                    value={tarefa}
                    className={styles.input_box}
                    onChange={(e) => setTarefa(e.target.value)}
                    />
                    <input type='submit' value='Adicionar' className={styles.input_sub}></input>

                </form>


        </div>
    )
}

export default Input


