import styles from './index.module.scss'

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxhooks";
import { updateTime } from "../../redux/slices/timerSlice";

import { add, sub} from "date-fns";




const Timer = ({handler}:any) => {
    const {time, timeLeft} = useAppSelector(state=> state.timer);
    const startDate = new Date();
    const dispatch = useAppDispatch();
    const [isFocus, setIsFocus] = useState<boolean>(true);
    const [endDate, setEndDate] = useState<any>(add(new Date(), {minutes:time}));
    const [tick, setTick] = useState(sub(endDate,{
        years: startDate.getFullYear(),
        months: startDate.getMonth(),
        days: startDate.getDate(),
        hours: startDate.getHours(),
        minutes: startDate.getMinutes(),
        seconds: startDate.getSeconds()
    }));

    useEffect(() => {

        if(tick.toLocaleTimeString() === '00:00:00' || isFocus===false) return;
    
        const interval = setInterval(()=>{
            dispatch(updateTime(tick.toLocaleTimeString()));

            tick.setSeconds(tick.getSeconds() - 1);

        }, 1000);
    
        return () => clearInterval(interval);
    }, [ isFocus, timeLeft])
    

    return (
        <div className={styles.timer}>
        <div className={styles.container}>
        {(tick.toLocaleTimeString() === '00:00:00'  || !isFocus)
        ?       <>
                <p className={styles.result}>Вы были сфокусированы <span>{time - (tick.getMinutes() + (tick.getHours() * 60))}</span> минут.</p>
                <button onClick={()=>handler(time - (tick.getMinutes() + (tick.getHours() * 60)))}>Отлично</button>
                </>

        :       <>
                <p>Осталось <span>{tick.toLocaleTimeString()}</span></p>
                <button onClick={()=> setIsFocus(false)}>Стоп</button>
                </>
    }
        </div>
        </div>
    )


}

export default Timer;