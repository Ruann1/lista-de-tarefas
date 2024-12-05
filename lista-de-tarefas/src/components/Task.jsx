import {useState} from 'react'

function Task({ addTask }){
    const[tarefa, setTarefa] = useState('');

    const handleAdicionar = (e) => {
        e.preventDefault();
        addTask(tarefa);
        setTarefa('');
    };

    return(
        <form onSubmit={handleAdicionar}>
            <input type="text" 
            id="itext"
            placeholder='Adicione sua nova Tarefa'
            value={tarefa} 
            onChange={(e) => setTarefa(e.target.value)}
            />
            <button type='submit'>Adicionar</button>
        </form>
    );
};

export default Task;