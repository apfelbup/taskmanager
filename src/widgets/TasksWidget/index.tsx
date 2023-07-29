import styles from './stlyes.module.scss';
import { useAppSelector } from '../../hooks/reduxhooks';

import { useWindowResize } from '../../hooks/useWindowResize';
import { TASK_TYPES } from '../../assets/constants';

import Progress from "../../components/Progress";
import ProgressBar from "../../components/Progress/ProgressBar";
import TaskItem from './TaskItem';


const TaskWidget = () => {
    const {tasks} = useAppSelector(state=> state.tasks);
    const tasksDone = tasks.filter(item=> item.status === 'Выполнено');
    const percent = Math.floor((tasksDone.length/tasks.length)*100);
    const size = useWindowResize();


    return(
        <article className={styles.tasksWidget}>
            <div className={styles.header}>
                <h4 className={styles.title}>Задач выполнено:</h4>
                <p className={styles.percent}>{percent ? percent : 0 }%</p>
            </div>
            {size <= 768 && 
            <div className={styles.progressBox}>
                <ProgressBar completed={tasksDone.length} value={tasks.length}/>
                <Progress/>
            </div>}
        <ul>
        {
            TASK_TYPES.map(item=>(
                <TaskItem key={item.id} title={item.title} id={item.id}/>
            ))
        }
        </ul>

    </article>
    )
}




export default TaskWidget;