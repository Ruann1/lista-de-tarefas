import styles from './Folha.module.css'
import Form from './Form'
import Dados from './Dados'

function Folha() {
    return(
        <div className={styles.folha}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.elemento}>
                <p>N° De Tarefas: 000</p>
                <p>Pendentes: 000</p>
            </div>
            
            <Form />
            
            
        
        </div>
       
    )
}

export default Folha;