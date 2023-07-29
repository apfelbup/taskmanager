import styles from './index.module.scss';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';
import { updateTasksStatistic } from '../../redux/slices/statisticSlice';
import { addNewComment, changeStatus, deleteTask } from '../../redux/slices/tasksSlice';

import { formatWeek } from "../../helpers/formatWeek";
import { getWeekOfMonth } from "date-fns";
import {v4 as uuid} from 'uuid';

import { Status } from '../../interfaces';
import { DAYS, STATUSES_COLLECTION } from "../../assets/constants";

import formatDate from '../../helpers/formatDate';

import Selection from '../Selection';
import Steps from '../Steps';
import Comments from '../Comments';






const TaskInfo = () => {
    const dispatch = useAppDispatch();
    const {activeTask} = useAppSelector(state => state.tasks);
    const defaultValue = {value: activeTask?.status, label: activeTask?.status};

    const [textarea, setTextArea] = useState('');

    //обновление статуса задачи
    const statusHandler = (e: Status) => {


        dispatch(changeStatus({id: activeTask!.id, status: e}));

        if(e === 'Выполнено') {
            const {createdDate} = formatDate();
            dispatch(changeStatus({id: activeTask!.id, status: e, completedDate: createdDate}));
            
            const id = activeTask?.id;
            const day = DAYS[new Date().getDay()];
            const week = formatWeek(getWeekOfMonth(new Date()));

            dispatch(updateTasksStatistic({id, day, week}))
        }
    }

    //добавление комментария
    const handleSubmit = (e) => {
        e.preventDefault();


        if(textarea) {
            const id = uuid();
            const {createdDate} = formatDate();

            dispatch(addNewComment({id:activeTask.id, comment:{content:textarea, id:id, date:createdDate}}))
        }
        setTextArea('');
    }

    return activeTask ? (
        <div className={styles.taskinfo}>
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.settings}>
                <Selection key={defaultValue.label} options={STATUSES_COLLECTION} handler={statusHandler} defaultValue={defaultValue}/>
                <button onClick={()=> dispatch(deleteTask(activeTask.id))}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                </div>
            </div>
            <div className={styles.name}>
                <h2>{activeTask.content}</h2>
                <span> <svg height="25px" width="25px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" 
	            viewBox="0 0 512 512" >

<g>
	<path fill="currentColor" d="M464.214,163.304c29.772-9.732,48.968-69.787,33.717-95.422c0.31,16.314-29.203,28.173-39.144,10.486
		c-6.138-28.508,22.838-61.823,48.272-64.98c-11.75-18.349-64.561-20.803-76.008,11.616c-9.12,25.794-11.834,36.329-33.131,27.796
		c-23.299-9.346,11.046-42.694,16.548-46.823c-73.732-14.899-56.069,61.219-83.706,53.481c-27.662-7.747-1.272-30.836,1.81-33.801
		c-44.161-7.797-48.273,17.67-77.768,32.904c-41.991-4.204-83.622,3.45-120.43,21.037C82.107,104.496,39.186,149.518,18.224,208.36
		h-0.008l-0.109,0.292c-0.016,0.042-0.042,0.084-0.058,0.126l-0.067,0.201c-20.887,59.058-15.854,121.225,9.17,173.592
		c24.982,52.409,70.147,95.414,129.189,116.326l0.092,0.034l0.033,0.016l0.092,0.033l0.092,0.034l0.31,0.093
		c58.916,20.71,120.915,15.652,173.174-9.314c52.401-24.965,95.406-70.138,116.325-129.18l0.042-0.118l0.017-0.05l0.016-0.041
		l0.033-0.093c12.034-34.102,15.385-69.209,11.298-102.892c10.126-16.415,20.995-26.556,27.277-36.171
		c18.182-27.871,4.137-45.819,4.137-45.819s-6.868,16.607-25.61,18.081C444.918,194.986,434.442,173.061,464.214,163.304z
		M400.373,344.09l-0.058,0.176c-16.466,46.455-50.04,81.654-91.268,101.352c-41.238,19.656-89.728,23.608-136.182,7.202
		l-0.176-0.058c-46.446-16.473-81.654-50.04-101.359-91.269c-19.648-41.246-23.609-89.727-7.194-136.198l0.025-0.067l0.034-0.101
		c16.473-46.454,50.048-81.662,91.268-101.351c41.246-19.647,89.727-23.617,136.182-7.203l0.109,0.034l0.058,0.017
		c46.463,16.49,81.671,50.047,101.368,91.268C412.827,249.136,416.788,297.618,400.373,344.09z"/>
	<polygon fill="currentColor" points="237.634,265.074 162.907,151.261 139.976,164.602 220.734,323.153 339.422,244.505 326.081,221.592 	
		"/>
</g>
                </svg>{activeTask.deadline}</span>
            </div>
            <div className={styles.content}><p>{activeTask?.description?.length ? activeTask.description : 'Описания нет'}</p></div>
            <div className={styles.info}>
                Вы создали задачу задачу
                <span>{activeTask.createdDate}</span>
            </div>
            <div className={styles.progress}>
                <Steps activeTaskId={activeTask.id}/>
                {activeTask.status === 'Выполнено' &&  <div className={styles.completedStatus}>Вы выполнили задачу <span>{activeTask.completedDate}</span></div>}
            </div>
            <div className={styles.commentsBlock}>
                <Comments id={activeTask.id} comments={activeTask.comments}/>
            </div>
            </div>

                <form className={styles.form} onSubmit={(e) => handleSubmit(e)} action="">

                <textarea className={styles.textarea} placeholder='Добавить комментарий' value={textarea} onChange={(e)=> setTextArea(e.target.value)}></textarea>

                <button type='submit'>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4C20 4 16 5 11 7C8.14784 8.14086 5.94647 9.28173 4.58149 10.0514C3.88975 10.4414 3.96687 11.4144 4.69678 11.7272L10 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                </form>

        </div>
    ) : <h3 className={styles.disabled}>Откройте задачу</h3>;
}

export default TaskInfo;