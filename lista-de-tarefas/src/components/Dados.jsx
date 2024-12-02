import styles from './Dados.module.css'

function Dados() {
    return(
        <div>
            <h1>Lista de Tarefas</h1>
                <div className={styles.elemento}>
                    <p>N° De Tarefas: 000</p>
                    <p>Pendentes: 000</p>
                </div>
        </div>
    )
}

export default Dados;