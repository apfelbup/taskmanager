import styles from './tasks.module.scss'

import TaskList from "../../components/TaskList";
import TaskInfo from '../../components/TaskInfo';



const Tasks = () => {
    return(
        <div className={styles.container}>
            <TaskList/>
            <TaskInfo/>
        </div>
    )
}

export default Tasks;