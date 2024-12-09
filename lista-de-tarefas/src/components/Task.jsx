import {useState} from 'react'
import styles from './Folha.module.css'

function Task({ addTask }){
    const[tarefa, setTarefa] = useState('');

    const handleAdicionar = (e) => {
        e.preventDefault();
        addTask(tarefa);
        setTarefa('');
    };

    const [conta, setConta] = useState(0);
    function incremento()  {
        setConta(conta + 1);
    }

    return(
        
        <div className={styles.dados}>
            <p>Voce adicionou {conta} tarefas</p>
            <p>Voce tem 0 tarefas pendentes</p>
            
            <form onSubmit={handleAdicionar}>
                <h1>Adicionar Tarefas</h1>
                <input type="text"
                id="itext"
                placeholder='Adicione sua nova Tarefa'
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                />
                <button type='submit' onClick={incremento}>Adicionar</button>
            </form>
        </div>
    );
};

export default Task;