import { useState } from 'react';
import './App.css';


const App = () => {
    const [tasks, setTasks] = useState([
        {id:1, name: "Record Lectures", complete: true}, 
        {id:2, name: "Watch course", complete: false}, 
        {id:3, name: "Edit code", complete: true},
        {id:4, name: "Take notes", complete: true}
    ]);

    const [show, setShow] = useState(true)

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }



    return (
        <div className='App'>
            <h1>Task List</h1>
            <ul>
                <button className='toggle' onClick={() => setShow(!show)}>Toggle</button>
                { show && tasks.map((task) => (
                    <li key={task.id} className={task.complete ? "completed" : "incomplete"}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;



