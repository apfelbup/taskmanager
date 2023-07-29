import styles from './index.module.scss'
import Comment from './Comment';
import { memo } from 'react';
import { comment } from '../../interfaces';

interface IComments {
    id:string,
    comments: comment[]
}

const Comments = memo(({id, comments}:IComments) => {

    return(
        <ul className={styles.comments}>
            {comments?.map(item=> <Comment key={item.id} content={item.content} id={item.id} date={item.date}/>)}
        </ul>
    )
})

export default Comments;