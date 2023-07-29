import styles from './index.module.scss';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/reduxhooks';
import {v4 as uuid} from 'uuid';
import { addNewBook } from '../../../redux/slices/booksSlice';



interface IBooksPopup {
    handler: () => void
}

const BooksPopup = ({handler}:IBooksPopup) => { 
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');


    const handleFormSubmit = (values: { name: string; author: string; pages: number}) => {

        const id = uuid();

        dispatch(addNewBook({...values, id:id, rating:0}));

        handler();

}

    return(

            <>
                <button onClick={handler} className={styles.close}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.0145 3.93128C31.394 3.53836 31.604 3.01211 31.5993 2.46587C31.5945 1.91962 31.3754 1.3971 30.9892 1.01083C30.6029 0.624563 30.0804 0.40546 29.5341 0.400714C28.9879 0.395967 28.4616 0.605956 28.0687 0.985452L16 13.0542L3.93122 0.985452C3.53829 0.605956 3.01204 0.395967 2.4658 0.400714C1.91955 0.40546 1.39703 0.624563 1.01076 1.01083C0.624493 1.3971 0.405391 1.91962 0.400644 2.46587C0.395898 3.01211 0.605887 3.53836 0.985383 3.93128L13.0541 16L0.985383 28.0688C0.786403 28.261 0.62769 28.4908 0.518505 28.745C0.409319 28.9992 0.351848 29.2726 0.349444 29.5492C0.34704 29.8258 0.399752 30.1002 0.504503 30.3562C0.609255 30.6122 0.763949 30.8448 0.959559 31.0404C1.15517 31.236 1.38778 31.3907 1.64381 31.4955C1.89985 31.6002 2.17418 31.653 2.4508 31.6506C2.72743 31.6482 3.0008 31.5907 3.25497 31.4815C3.50915 31.3723 3.73903 31.2136 3.93122 31.0146L16 18.9459L28.0687 31.0146C28.4616 31.3941 28.9879 31.6041 29.5341 31.5994C30.0804 31.5946 30.6029 31.3755 30.9892 30.9892C31.3754 30.603 31.5945 30.0804 31.5993 29.5342C31.604 28.988 31.394 28.4617 31.0145 28.0688L18.9458 16L31.0145 3.93128Z" fill="black"/>
                </svg>
                </button>
                <Formik
                    enableReinitialize
                    initialValues={{name:name, author:author, pages:Number(pages)}}
                    onSubmit={(values)=>handleFormSubmit(values)}
                >
                    {({values})=>(
            <Form>
            <label className={styles.settings} htmlFor="name">
                <p>Название:</p>
                <Field onChange={(e: { target: { value: string } })=> setName(e.target.value)} value={name} className={styles.formControl} name="name" id='name' placeholder='напишите название...' required/>
            </label>

            <label className={styles.settings} htmlFor="author">
                <p>Автор:</p>
                <Field onChange={(e: { target: { value: string } })=> setAuthor(e.target.value)} value={author} className={styles.formControl} name="author" id='author' placeholder='напишите автора...' required/>
            </label>

            <label className={styles.settings} htmlFor="pages">
                <p>Количество страниц:</p>
                <Field onChange={(e: { target: { value: string } })=> setPages(e.target.value)} value={pages} className={styles.formControl} name="pages" id='pages' type='number' min="5" max="10000" placeholder='всего страниц...' required/>
            </label>

            <button className={styles.create} type="submit">Создать</button>
            </Form>
                    )}
            </Formik>
            </>
    )
}

export default BooksPopup;