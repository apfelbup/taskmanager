import styles from './focusing.module.scss'

import { useState } from "react";

import { useAppSelector,useAppDispatch } from "../../hooks/reduxhooks";
import { updateDate, updateTimeStatistic } from "../../redux/slices/statisticSlice";
import { stopTimer } from "../../redux/slices/timerSlice";

import { formatWeek } from "../../helpers/formatWeek";
import { getDate, getMonth, getWeekOfMonth } from "date-fns";

import { DAYS } from "../../assets/constants";
import { useWindowResize } from "../../hooks/useWindowResize";
import {AiFillClockCircle} from 'react-icons/ai'

import Timer from "../../components/Timer";
import Popup from "../../components/Popup";



const Focusing = () => {
    const [popup, setPopup] = useState<false|string>(false);
    const [type, setType] = useState<string>('work');
    const dispatch = useAppDispatch();
    const pageType = useAppSelector(state=> state.timer.pageType);
    const size = useWindowResize();

    //обновление статистики после остановки таймера
    const timerEnd = (time:number) => {
        dispatch(stopTimer());
        if(time>0){
            const date = new Date();

            const dayOfMonth = getDate(date);
            const weekOfMonth = getWeekOfMonth(date);
            const month = getMonth(date);

            const day = DAYS[date.getDay()];
            const week = formatWeek(weekOfMonth);


            dispatch(updateTimeStatistic({type, time, day, week}));
            dispatch(updateDate({dayOfMonth, weekOfMonth, month}));
        }
    }


    return(
        <div className={pageType==="selection"? '' : styles.focusing}>
            <button onClick={()=> setPopup('timer')} className={pageType === 'timer' ? styles.hidden : styles.btn}>
                {size > 1024 ? 'Фокусировка' : <AiFillClockCircle/>}
            </button>
            {popup && <Popup setType={setType} handler={setPopup} type="focusing"/> }
            {pageType ==="timer" && <Timer handler={timerEnd}/>}
        </div>
    )
}

export default Focusing;