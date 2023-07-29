import styles from './index.module.scss';
import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';
import {v4 as uuid} from 'uuid';

import Step from './Step';
import { addNewStep, deleteStep, updateStepCompleted } from '../../redux/slices/tasksSlice';



const Steps = memo(({activeTaskId}:any) => {
    const {steps} = useAppSelector(state => state.tasks.activeTask);
    const dispatch = useAppDispatch();
    const [input, setInput] = useState<string>('');

    //добавить шаг
    const handleSteps = () => {
        if(input){
        const id = uuid();

        dispatch(addNewStep({id:activeTaskId , step:{content:input, completed:false, id:id}}));

        setInput('');
    }
    }

    const handleDelete = (id) => {
        dispatch(deleteStep({id:activeTaskId, stepId:id}));
    }

    const handleCompleted = (completed, id) => {
        dispatch(updateStepCompleted({id:activeTaskId, stepId:id}))
    }

    return (
        <div className={styles.steps}>
            <div className={styles.create}>
                <input  type="text" placeholder='Добавить шаг' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSteps}>+</button>
            </div>
            <ul className={styles.stepsList}>
                {steps?.map(item => <Step key={item.id} id={item.id} content={item.content} completed={item.completed} handleDelete={handleDelete} handleCompleted={handleCompleted}/>)}
            </ul>
        </div>
    )
});

export default Steps;