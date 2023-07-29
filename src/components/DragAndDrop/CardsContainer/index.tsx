import styles from './index.module.scss';

import {  Droppable } from 'react-beautiful-dnd';
import {book} from '../../../interfaces';

import CardItem from '../CardItem';


interface ICardsContainer {
    status: string;
    items: Array<book>;
}


const CardsContainer = ({status, items}:ICardsContainer) => { 


    return (
        <div className={styles.container}>
        <p className={styles.status}>{status}</p>
        <Droppable droppableId={status}>
            {
                (provided)=>(
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {
                            items.map((item:book, index:number) => {
                                return (
                                    status === item.status 
                                    && <CardItem
                                            name = {item.name}
                                            id={item.id}
                                            key = {item.id}
                                            index = {index}
                                        />
                                )
                            })
                        }

                    {provided.placeholder}
                    </ul>
                )
            }

            </Droppable>
        </div>
    )
}

export default CardsContainer