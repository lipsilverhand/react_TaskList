export const TaskCard = ({task, handleDelete}) => {
  return (
    <li key={task.id} className={task.complete ? "completed" : "incomplete"}>
        <span>{task.id} - {task.name}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}
