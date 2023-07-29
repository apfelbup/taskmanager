import styles from './index.module.scss';

import { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxhooks';

import { task } from '../../interfaces';
import { TASK_TYPES } from '../../assets/constants';

import Selection from '../Selection';
import Task from '../Task';
import Popup from '../Popup';




const TaskList = () => {
    const {tasks} = useAppSelector(state => state.tasks);
    const options = [{title: 'все', value:'all'}, ...TASK_TYPES];
    const [filterValue, setFilterValue] = useState<string>('все');

    const [popup, setPopup] = useState<boolean>(false);
    const handlePopup = () => {
        setPopup(!popup);
    }

    const listHandler = (e:string) => {
        setFilterValue(e);
    }

    return (
        <div className={styles.container}>
            <Selection options={options} handler={listHandler} defaultValue={false}/>
            <div className={styles.list}>
                <ul>
                    {filterValue === "все" ?
                    tasks.map((item: task, index: number)=> {
                    return (
                    
                    <Task
                        content={item.content}
                        id={item.id}
                        key={item.id}
                        type={item.type}
                        status={item.status}
                        index={index}
                        deadline={item.deadline}
                        createdDate = {item.createdDate}
                        />
                            );
                            })
                    : tasks.filter((item:task)=> item.type === filterValue).map((item: task)=> {
                            return (
                                <Task
                                    content={item.content}
                                    id={item.id}
                                    key={item.id}
                                    type={item.type}
                                    status={item.status}
                                    deadline={item.deadline}
                                    createdDate = {item.createdDate} />
                            );
                        })
                    }
                </ul>
            </div>
            <button className={styles.btn} onClick={handlePopup}>
                Новая задача
            </button>
            {popup && <Popup handler={handlePopup} type="newTask"/>}
        </div>
    )
}

export default TaskList;