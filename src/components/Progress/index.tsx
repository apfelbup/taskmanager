import styles from './index.module.scss';

import { useAppSelector } from '../../hooks/reduxhooks';
import { memo } from 'react';





const Progress = memo(() => {

    const {tasks} = useAppSelector(state => state.tasks);
    const completed = tasks.filter(item => item.status === 'Выполнено').length;
    const inProgress = tasks.filter(item => item.status === 'В процессе').length;
    const notFulfilled = tasks.filter(item => item.status === 'Не сделано').length;

    return (
            <div className={styles.progress}>
                <ul>
                    <li>
                        {completed}
                        <span>
                            Выполнено
                        </span>
                    </li>
                    <li>
                        {notFulfilled}
                        <span>
                            не выполнено
                        </span>
                    </li>
                    <li>
                        {inProgress}
                        <span>
                            В процессе
                        </span>
                    </li>
                </ul>
            </div>
    )
});

export default Progress;