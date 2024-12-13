import { useState } from 'react';
import styles from './Folha.module.css';

function Task({ tarefas, addTask, deleteTask }) {
    const [novaTarefa, setNovaTarefa] = useState('');

    const handleAdicionar = (e) => {
        e.preventDefault();
        if (novaTarefa.trim()) {
            addTask(novaTarefa);
            setNovaTarefa('');
        }
    };

    return (
        <div className={styles.dados}>
            <form onSubmit={handleAdicionar}>
                <h1>Adicionar Tarefa</h1>
                <input
                    type="text"
                    id="itext"
                    placeholder="Adicione sua nova Tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            <h1>Tarefas Adicionadas</h1>
            {tarefas.map((tarefa) => (
                <div key={tarefa.id} className={styles.tarefas}>
                    <span className={styles.folha}>{tarefa.name}</span>
                    <button
                        className={styles.btn}
                        onClick={() => deleteTask(tarefa.id)}
                    >
                        Deletar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Task;
