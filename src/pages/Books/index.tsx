import styles from './books.module.scss';

import { useState } from "react";

import { useAppSelector } from "../../hooks/reduxhooks";

import DragAndDrop from "../../components/DragAndDrop";

import BooksList from "../../widgets/BooksWidgets/BooksList";
import Header from "../../components/Header";
import Popup from '../../components/Popup';




const Books = () => {
    const [popup, setPopup] = useState<boolean>(false);

    const {books} = useAppSelector(state => state.books);

    const popupHandler = () => {
        setPopup(!popup);
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
            {popup && <Popup handler={popupHandler} type='books'/>} 
            <div className={styles.header}>
            <Header/>
            <button onClick={popupHandler} className={styles.create}>
                Добавить
            </button>
            </div>

            <div className={styles.pageContent}>
                <div className={styles.readingNow}>
                    <h3 className={styles.title}>Читаете сейчас</h3>
                    <div className={styles.bookBox}>
                        {books.filter(item => item.status === 'В процессе').map(item => <BooksList key={item.id} id={item.id} name={item.name} author={item.author} pagesLeft={item.pagesLeft} pages={item.pages} rating={item.rating} status={item.status}/>)}
                    </div>
                </div>
                <div className={styles.control}> 
                    <h3>Управление</h3>
                    <DragAndDrop />
                </div>
            </div>
                <div className={styles.library}>
                    <h3 className={styles.title}>Библиотека</h3>
                    <div className={styles.bookBox}>
                        {books.filter(item => item.status === 'Не прочитано' || item.status === 'Прочитано').map(item => <BooksList key={item.id} id={item.id} name={item.name} author={item.author} pagesLeft={item.pagesLeft} pages={item.pages} rating={item.rating} status={item.status}/>)}
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Books;