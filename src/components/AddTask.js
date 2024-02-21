import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
const [TaskValue, setTaskValue] = useState("");
const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
        setProgress(false);
    }

    const handleReset = () => {
        setTaskValue("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 100),
            name: TaskValue,
            completed: Boolean(progress)
        }
        handleReset();
    }

    return (
        <section className="addtask">
            <form action="">
                <label htmlFor="task">Task Name:</label>
                <input onChange={handleChange} type="text" name="task" id="task" placeholder="Add new task here..." autoComplete="Off" value={TaskValue} />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value={true}>Completed</option>
                    <option value={false}>On processing</option>
                </select>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p className="display">{TaskValue}</p>
        </section>
    )
}
