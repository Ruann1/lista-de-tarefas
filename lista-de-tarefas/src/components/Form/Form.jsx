import styles from './Form.module.css'

import Input from './Input'

function Form(){
    return(
        <div>
            <h1>Adicionar Tarefa</h1>
            <Input 
            type='text'
            placeHolder='Teste'
            />
        </div>
        
    )
}

export default Form