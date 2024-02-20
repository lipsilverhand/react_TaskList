import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id:1, name: "Record Lectures", complete: true}, 
        {id:2, name: "Watch course", complete: false}, 
        {id:3, name: "Edit code", complete: true},
        {id:4, name: "Take notes", complete: true}
    ]);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const [show, setShow] = useState(true)

  return (
    <div>
        <h1>Task List</h1>
        <ul>
            <button className='toggle' onClick={() => setShow(!show)}>Toggle</button> 
            { show && tasks.map((task) => (
                <TaskCard task={task} handleDelete={handleDelete}/>
            ))}
        </ul>
        <BoxCard result="success">
            <p className='title'>Lorem ipsum dolor sit amet.</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </BoxCard>        
        
        <BoxCard result="warning">
            <p className='title'>Lorem ipsum dolor sit .</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!</p>
            
        </BoxCard>
    </div>
  )
}
