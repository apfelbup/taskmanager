import styles from './index.module.scss'

import { useAppSelector } from '../../hooks/reduxhooks';
import { useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import Radio from '../../components/Radio';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'top' as const,
    }
    },
};





const FocusingWidget = () => {   
    const {weekly, monthly} = useAppSelector(state=> state.statistic.time);
    const [type, setType] = useState<string>('weekly');

    return(
        <article className={styles.focusWidget}>
        <div className={styles.heading}>
            <h4 className={styles.title}>Распределение фокусировки:</h4>
            <Radio handler={setType} options={[{id:'weekly', name:'statsType', value:'weekly', title:'за неделю' },{id:'monthly', name:'statsType', value:'monthly', title:'за месяц' }]}/>
        </div>
        <div>
            <Bar
            options={options} 
            data={{
                labels: type === 'weekly' ? ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] : ['1-ая неделя', '2-ая неделя', '3-ая неделя', '4-ая неделя', '5-ая неделя'],
                datasets: [
                {        
                    data:type === 'weekly' ? [weekly.sun, weekly.mon, weekly.tue, weekly.wed, weekly.thu, weekly.fri, weekly.sat] : [monthly.first, monthly.second, monthly.third, monthly.fourth, monthly.fifth],
                    label: 'время фокусировки',
                    backgroundColor: 'rgba(170, 104, 194, 1)',
                }
                ],
            }}/>
        </div>
        </article>
    )
}

export default FocusingWidget;