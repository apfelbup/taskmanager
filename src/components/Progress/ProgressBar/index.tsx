import styles from './index.module.scss';

import { memo, useState } from 'react';


interface IProgressBar {
    status?:string,
    value:number,
    completed:number,
    editing?:boolean,
    id?:string | undefined,
    handler?: (arg:any) => void

}


const ProgressBar = memo(({status='', value, completed, editing=false, id=undefined, handler=(input:any)=>{}}:IProgressBar) => {
    const [input, setInput] = useState<string | number>(completed);

    const percentage = completed / value * 100;

    const progressBarHandler = (e: string) => {

        setInput(e);

        if(Number(input) > Number(value)) {
            setInput(value);
        } else if (input < 0 || !input) {
            setInput(1);
        } else {
            setInput(e);
        }

        handler(input)
    }


    return (
        <div className={styles.container}>
        <div className={styles.progress}>
            <div className={styles.progressBar} style={{width:`${status === 'Прочитано' ? value : percentage}%`}}></div>
        </div>
        <span>
        {editing 
        ? <input type="number" value={status === 'Прочитано' ? value : input} onChange={(e)=> progressBarHandler(e.target.value)} onBlur={(e)=> progressBarHandler(e.target.value)} min="0"/>
        : `${completed}`
        } / {value}</span>
        </div>
    )
})

export default ProgressBar;