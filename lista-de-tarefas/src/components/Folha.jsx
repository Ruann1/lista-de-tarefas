import {useState} from 'react'
import styles from './Folha.module.css'
import Incremento from './Task'

import Task from './Task'


function Folha(){
    const[tarefas, setTarefas] = useState([]);

    const adicionar = (newTask) => {
        const newTaskObject = {id: Date.now(), name:newTask}; 
        setTarefas((prevTasks) => [...prevTasks, newTaskObject]);
        
    }

    const deleteTask = (taskId) => {
        setTarefas((prevTasks) => prevTasks.filter(task => task.id !== taskId))
        
    };

    

   return(
        <div className={styles.folha}>
            <h1>Lista de Tarefas</h1>
    
            <Task addTask={adicionar} />
            <h1>Tarefas Adicionadas</h1>
           
                    {tarefas.map((tarefas, index) => (
                       
                        <div key={tarefas.id} className={styles.tarefas}>
                               
                                <span className={styles.folha}>{tarefas.name}</span>
                                <button className={styles.btn} onClick={() => deleteTask(tarefas.id)}>Deletar</button>       
                        </div>
                    ))}
            

        
        </div>
       
    )
}

export default Folha;