import styles from './index.module.scss'

import { comment } from '../../../interfaces'


const Comment = ({content, id, date}:comment) => {

    
    return(
        <li className={styles.comment}>
            <div className={styles.commentHeading}>
                Вы
                <span>{date}</span>
            </div>
            <div className={styles.text}>{content}</div>
        </li>
    )
}

export default Comment