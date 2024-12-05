import {useState} from 'react'
import styles from './Folha.module.css'

import Task from './Task'


function Folha(){
    const[tarefas, setTarefas] = useState([]);

    const addTask = (newTask) => {
        setTarefas((prevTasks) => [...prevTasks, newTask]);
        console.log(tarefas)
    }

   return(
        <div className={styles.folha}>
            <h1>Lista de Tarefas</h1>
            <Task addTask={addTask} />
            <ul>
                {tarefas.map((tarefas, index) => (
                    <li key={index}> {tarefas} </li>
                ))}
            </ul>
        </div>
       
    )
}

export default Folha;