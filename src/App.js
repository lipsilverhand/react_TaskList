import { Header } from '../src/components/Header'
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css';


const App = () => {
    return (
        <div className='App'>
            <Header />
            <AddTask />           
            <TaskList />
            <Footer />
        </div>
    )
}

export default App;



