import styles from './Folha.module.css'

import Form from './Form/Form'
import Dados from './Dados'
import Tarefas from './Tarefas'

function Folha() {
    return(
        <div className={styles.folha}>
            
            <Dados />
            <Form />
            <Tarefas />
            
        </div>
       
    )
}

export default Folha;