import { useState } from 'react';
import styles from './Folha.module.css';
import Task from './Task';

function Folha() {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (novaTarefa) => {
        const novaTarefaObj = { id: Date.now(), name: novaTarefa };
        setTarefas((prevTarefas) => [...prevTarefas, novaTarefaObj]);
    };

    const deletarTarefa = (idTarefa) => {
        setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== idTarefa));
    };

    return (
        <div className={styles.folha}>
            <h1>Lista de Tarefas</h1>
            <p>Você tem {tarefas.length} tarefas pendentes</p>
            <Task tarefas={tarefas} addTask={adicionarTarefa} deleteTask={deletarTarefa} />
        </div>
    );
}

export default Folha;
