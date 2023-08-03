import styles from './index.module.scss'

import { useAppSelector } from '../../hooks/reduxhooks';
import { useState } from 'react';
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
import { Line } from 'react-chartjs-2';

import Radio from '../../components/Radio';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'top' as const,
    },
    title: {
        display: false,
    },

    },

};



const CompletedWidget = () => {  
    const {weekly, monthly} = useAppSelector(state=> state.statistic.completedTasks);
    const [type, setType] = useState<string>('weekly');


    return(
        <article className={styles.focusWidget}>
        <div className={styles.heading}>
            <h4 className={styles.title}>Выполнено задач:</h4>
            <Radio handler={setType} options={[{id:'completedWeekly', name:'completedStatsType', value:'weekly', title:'за неделю' },{id:'completedMonthly', name:'completedStatsType', value:'monthly', title:'за месяц' }]}/>
        </div>
        <div>
            <Line options={options} data={{
                labels: type === 'weekly' ? ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] : ['1-ая неделя', '2-ая неделя', '3-ая неделя', '4-ая неделя', '5-ая неделя'],
                datasets: [
                {
                    label: 'Выполненные задачи',
                    data: type === 'weekly' ? [weekly.sun.length, weekly.mon.length, weekly.tue.length, weekly.wed.length, weekly.thu.length, weekly.fri.length, weekly.sat.length] : [monthly.first.length, monthly.second.length, monthly.third.length, monthly.fourth.length, monthly.fifth.length],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
                ],
                }} 
            />
        </div>
        </article>
    )
}

export default CompletedWidget;