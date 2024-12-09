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
            <h1>Tarefas Adicionadas</h1>
            <select size={3}>
                {tarefas.map((tarefas, index) => (
                    <optgroup>
                        <option key={index}> {tarefas} </option>
                    </optgroup>
                ))}
                
                
            </select>
            
        </div>
       
    )
}

export default Folha;