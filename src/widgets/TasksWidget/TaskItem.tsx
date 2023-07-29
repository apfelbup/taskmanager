import { taskTypeColor } from '../../helpers/taskTypeColor';
import { useAppSelector } from '../../hooks/reduxhooks'
import styles from './stlyes.module.scss'



const TaskItem = ({title, id}) => {
    const {tasks} = useAppSelector(state=> state.tasks);
    const taskAmount = tasks.filter(item=> item.type === title);
    const tasksDone = taskAmount.filter(item=> item.status === 'Выполнено');
    const taskColor = taskTypeColor(title); 

    return(
        <li className={styles.taskType} key={id}>
        <span className={styles.leftSide}>
        <span className={styles.typeColor} style={{backgroundColor:taskColor}}></span>
        <span className={styles.name}> {title}</span>
        </span>
        <p style={{color:taskColor}} className={styles.progress}>{tasksDone.length}/{taskAmount.length}</p>
    </li>
    )
}

export default TaskItem