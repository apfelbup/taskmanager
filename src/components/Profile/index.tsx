import { useAppSelector } from '../../hooks/reduxhooks';
import { useWindowResize } from '../../hooks/useWindowResize';
import Progress from '../Progress';
import ProgressBar from '../Progress/ProgressBar';
import styles from './index.module.scss';




const Profile = () => {
    const {tasks} = useAppSelector(state => state.tasks);
    const completed = tasks.filter(item => item.status === 'Выполнено').length;
    const size = useWindowResize();

    return (
        <div className={styles.profile}>
            {size > 768 &&
            <>
            <ProgressBar completed={completed} value={tasks.length}/>
            <Progress/>
            </>
            }

        </div>
    )
}

export default Profile;