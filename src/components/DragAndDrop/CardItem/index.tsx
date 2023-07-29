import styles from './index.module.scss';

import { Draggable } from 'react-beautiful-dnd';

interface ICardItem {
    name:string,
    index:number,
    id:string
}


const CardItem = ({name, index, id}:ICardItem) => {

    return (
        <Draggable key={id} draggableId={id} index={index}>
        {(provided)=>(
        <li className={styles.list}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
            <p>{name}</p>
        </li>
        )}
        </Draggable>
    )
}

export default CardItem;