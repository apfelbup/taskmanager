import styles from './index.module.scss';

import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/reduxhooks';

import { startTimer } from '../../../redux/slices/timerSlice';
import { TASK_TYPES } from '../../../assets/constants';

import Radio from '../../Radio';


interface IFocusPopup {
    setPopup: (arg: boolean) => void,
    setType: () => void;
}


const FocusPopup = ({setPopup, setType}:IFocusPopup) => {

    const [time, setTime] = useState<string>('60');
    const [isError, setIsError] = useState<boolean>(false);
    const dispatch = useAppDispatch();


    const timerStartHandler = () => {

        if(Number(time) < 1 || Number(time)>180 || !time.length){
            setIsError(true);
            return;
        } else {

            setIsError(false);
            dispatch(startTimer({time, pageType:'timer'}))
            setPopup(false);
        }

    }

    return (
        <>
            <button onClick={()=>setPopup(false)} className={styles.close}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.0145 3.93128C31.394 3.53836 31.604 3.01211 31.5993 2.46587C31.5945 1.91962 31.3754 1.3971 30.9892 1.01083C30.6029 0.624563 30.0804 0.40546 29.5341 0.400714C28.9879 0.395967 28.4616 0.605956 28.0687 0.985452L16 13.0542L3.93122 0.985452C3.53829 0.605956 3.01204 0.395967 2.4658 0.400714C1.91955 0.40546 1.39703 0.624563 1.01076 1.01083C0.624493 1.3971 0.405391 1.91962 0.400644 2.46587C0.395898 3.01211 0.605887 3.53836 0.985383 3.93128L13.0541 16L0.985383 28.0688C0.786403 28.261 0.62769 28.4908 0.518505 28.745C0.409319 28.9992 0.351848 29.2726 0.349444 29.5492C0.34704 29.8258 0.399752 30.1002 0.504503 30.3562C0.609255 30.6122 0.763949 30.8448 0.959559 31.0404C1.15517 31.236 1.38778 31.3907 1.64381 31.4955C1.89985 31.6002 2.17418 31.653 2.4508 31.6506C2.72743 31.6482 3.0008 31.5907 3.25497 31.4815C3.50915 31.3723 3.73903 31.2136 3.93122 31.0146L16 18.9459L28.0687 31.0146C28.4616 31.3941 28.9879 31.6041 29.5341 31.5994C30.0804 31.5946 30.6029 31.3755 30.9892 30.9892C31.3754 30.603 31.5945 30.0804 31.5993 29.5342C31.604 28.988 31.394 28.4617 31.0145 28.0688L18.9458 16L31.0145 3.93128Z" fill="black"/>
                </svg>
            </button>
            <p className={styles.title}>Таймер</p>
            <p className={styles.subtitle}>Выберите тип таски:</p>
            <div className={styles.types}>
                <Radio handler={setType} options={TASK_TYPES}/>
            </div>
            <div className={styles.deadLine}>
                <label htmlFor="timerEnd">
                <span>Окончание через:</span>
                {isError && <p className={styles.error}>Выберите корректное время</p>}
                <input onChange={(e)=> setTime(e.target.value)} min="1" max="180" type="number" id="timerEnd" placeholder='60' defaultValue={60}/>
                <span>минут.</span>
                </label>
            </div> 

            <button onClick={timerStartHandler} className={styles.start}>
            Запустить
            </button>
        </>
    )
}

export default FocusPopup