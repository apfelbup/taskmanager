import Header from "../../components/Header";
import DragAndDrop from "../../components/DragAndDrop";
import styles from './tasks.module.scss'
import { useState } from "react";
import TaskPopup from "../../components/TaskPopup";



const Tasks = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>('все');
    console.log('Tasks')

    const handlePopup = () => {
        setPopup(!popup);
    }

    const handleFilter = (e:any) => {
        setFilterValue(e.target.value);
    }

    return(
        <div className={styles.wrapper}>
            <Header/>
            {popup && <TaskPopup handlePopup={handlePopup}/>}
            <div className={styles.settings}>
                <button onClick={handlePopup}>
                <svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="29.6438" cy="29.5" rx="29.6438" ry="29.5" fill="#CDA5DB"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30.0391 11.8C31.2397 11.8 32.213 12.7686 32.213 13.9633V26.9433H45.2562C46.4568 26.9433 47.4301 27.9119 47.4301 29.1067C47.4301 30.3015 46.4568 31.27 45.2562 31.27H32.213V44.25C32.213 45.4448 31.2397 46.4133 30.0391 46.4133C28.8384 46.4133 27.8652 45.4448 27.8652 44.25V31.27H14.8219C13.6214 31.27 12.6481 30.3015 12.6481 29.1067C12.6481 27.9119 13.6214 26.9433 14.8219 26.9433H27.8652V13.9633C27.8652 12.7686 28.8384 11.8 30.0391 11.8Z" fill="white"/>
                </svg>
                </button>
                <div className={styles.types}>
                <p>Показать:</p>
                <select onChange={(e)=> handleFilter(e)} name="" id="">
                    <option value="все">Все</option>
                    <option value="работа">Работа</option>
                    <option value="обучение">Обучение</option>
                    <option value="хобби">Хобби</option>
                    <option value="другое">Другое</option>
                </select>
                </div>
            </div>
            <DragAndDrop filterValue={filterValue}/>
        </div>
    )
}

export default Tasks;