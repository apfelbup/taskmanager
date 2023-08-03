import styles from './statistic.module.scss'
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxhooks";
import { resetDailyStatistic, resetMonthlyStatistic, resetWeeklyStatistic } from "../../redux/slices/statisticSlice";

import { getDate, getMonth, getWeekOfMonth } from "date-fns";

import Header from "../../components/Header";
import FocusingWidget from '../../widgets/FocusingWidget'
import TimeWidget from "../../widgets/TimeWidget";
import TaskWidget from "../../widgets/TasksWidget";
import CompletedWidget from "../../widgets/CompletedWidget";




const Statistic = () => {
    const {dayOfMonth, weekOfMonth, month} = useAppSelector(state => state.statistic);
    const dispatch = useAppDispatch();


    //сброс статистики
    useEffect(() => {
        const date = new Date();

        if(getDate(date) !== dayOfMonth){
            dispatch(resetDailyStatistic(getDate(date)));
            console.log(getDate(date), dayOfMonth)
        }
        if(getWeekOfMonth(date) !== weekOfMonth){
            dispatch(resetWeeklyStatistic(getWeekOfMonth(date)));
            console.log(getWeekOfMonth(date), weekOfMonth)
        }
        if(getMonth(date) !== month){
            dispatch(resetMonthlyStatistic(getMonth(date)));
            console.log(getMonth(date), month)
        }
    }, []) 

    return(
        <div className={styles.wrapper}> 
            <div className={styles.box}> 
            <Header/>
            <div className={styles.statistic}>
            <div className={styles.time}> 
                <TimeWidget/>
            </div>
            <div className={styles.tasks}>
            <TaskWidget/>
            </div>
            <FocusingWidget/>
            <div className={styles.completed}>
                <CompletedWidget/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Statistic;