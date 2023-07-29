import styles from './index.module.scss';

import { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxhooks';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Radio from '../../components/Radio';


ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);



const options = {
    maintainAspectRatio: false,
    plugins: {

    },
    radiusBackground: {
        color: '#d1d1d1'
    }
    ,
    cutout:70,
    radius:120

}


const TimeWidget = () => {
    const {daily, weekly} = useAppSelector(state => state.statistic.statistic);
    const {weeklyTotalTime, dailyTotalTime} = useAppSelector(state => state.statistic);
    
    const [type, setType] = useState<string>('daily');

    return(
        <article className={styles.timeWidget}>
            <div className={styles.heading}>
                <h4 className={styles.title}>{'Фокусировка:'}</h4>
                <Radio handler={setType} options={[{id:'dailyTime', name:'timeType', value:'daily', title:'за день' },{id:'weeklyTime', name:'timeType', value:'weekly', title:'за неделю' }]}/>
            </div>
        <div className={styles.doughnut}>
        <Doughnut 
            options={options}
            data={{
            datasets: [
                {
                label: 'потрачено минут ',
                data: type === 'daily' ? [daily.work, daily.study, daily.hobby, daily.other] :  [weekly.work, weekly.study, weekly.hobby, weekly.other],
                backgroundColor: [
                    'rgba(108, 204, 169, 1)',
                    'rgba(191, 108, 204, 1)',
                    'rgba(108, 118, 204, 1)',
                    'rgba(204, 108, 108, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)'
                ],
            
                hoverBackgroundColor:[
                    'rgba(108, 204, 169, 0.7)',
                    'rgba(191, 108, 204, 0.7)',
                    'rgba(108, 118, 204, 0.7)',
            
                    'rgba(204, 108, 108, 0.7)'
                ],
                hoverOffset:30,
                borderWidth: 20
                },
            ],
            }} />
        <span className={styles.totalTime}>{type === 'daily' ? dailyTotalTime : weeklyTotalTime} мин</span>
        </div>
        </article>
    )
}

export default TimeWidget;