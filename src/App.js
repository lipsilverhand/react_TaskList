import { useState } from 'react';
import { Header } from '../src/components/Header'
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css';


function App() {
    const [tasks, setTasks] = useState([
        {id:1, name: "Record Lectures", complete: true}, 
        {id:2, name: "Watch course", complete: false}, 
        {id:3, name: "Edit code", complete: true},
        {id:4, name: "Take notes", complete: true}
    ]);


    return (
        <div className='App'>
            <Header />
            <main>
                <AddTask tasks={tasks} setTasks={setTasks} />           
                <TaskList tasks={tasks} setTasks={setTasks} />
            </main>
            <Footer />
        </div>
    )
}
export default App;



