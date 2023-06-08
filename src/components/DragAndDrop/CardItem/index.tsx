import styles from './index.module.scss';
import { Data } from '../../../interfaces';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface ICardItem {
    data:Data,
    index:any,
    id:any,
    type:string
}
const CardItem = ({data, index, id, type}:ICardItem) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
        {(provided)=>(
        <li className={styles.list}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
            <span className={
            type==='работа'?styles.work
            :type==='обучение'?styles.study
            :type==='хобби'?styles.hobby
            :type==='другое'?styles.other:''}>
            </span>
            <p>{data.content}</p>
        </li>
        )}
        </Draggable>
    )
}

export default CardItem;