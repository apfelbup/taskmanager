import styles from './index.module.scss';

import { useAppDispatch } from '../../../hooks/reduxhooks';
import { changePagesValue, deleteBook } from '../../../redux/slices/booksSlice';

import ProgressBar from '../../../components/Progress/ProgressBar';
import StarRating from '../../../components/StarRating';
import { book } from '../../../interfaces';




const BooksList = ({name, author, pagesLeft, pages, id, rating, status}:book) => {
    const dispatch = useAppDispatch();

    const deleteItem = () => {
        dispatch(deleteBook(id));
    }

    const changeBookPages = (input: any) => {

        dispatch(changePagesValue({id:id, pages:input}))
    }

    return(
            <div className={styles.wrapper}>
            <div className={styles.delete}>
            <button onClick={deleteItem}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Interface / Trash_Full">
                <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#C3C3C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
            </button>
            </div>
            <svg className={styles.cover} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="#AA68C2" strokeWidth="1.5"/>
                <path d="M8 7H16" stroke="#AA68C2" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 10.5H13" stroke="#AA68C2" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45" stroke="#AA68C2" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12" stroke="#AA68C2" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>

            <div className={styles.info}>
                <div className={styles.heading}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.author}>{author}</span>
                </div>

                <div className={styles.rating}>
                    <StarRating totalStars={5} id={id} rating={rating}/>
                </div>
                <div className={styles.progress}>
                    <ProgressBar completed={pagesLeft ? pagesLeft : 0} value={pages} editing={true} id={id} status={status} handler={changeBookPages} />
                </div>
            </div>
            </div>
    )
}

export default BooksList;