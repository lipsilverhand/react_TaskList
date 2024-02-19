import { Header } from '../src/components/Header'
import { TaskList } from './components/TaskList';
import './App.css';


const App = () => {
    return (
        <div className='App'>
            <Header />
            <TaskList title="Random" subtitle="Test"/>
        </div>
    )
}

export default App;



