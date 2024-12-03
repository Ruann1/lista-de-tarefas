import styles from './Folha.module.css'

import Form from './Form/Form'
import Dados from './Dados'
import Lista from './Lista'

function Folha() {
    return(
        <div className={styles.folha}>
            
            <Dados />
            <Form />
            <Lista />
            
        </div>
       
    )
}

export default Folha;