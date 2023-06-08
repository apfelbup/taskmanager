import styles from './index.module.scss';
import { Data } from '../../../interfaces';
import CardItem from '../CardItem';
import React from 'react';
import {  Droppable } from 'react-beautiful-dnd';
interface ICardsContainer {
    status: any;
    items:any;
    filterValue:string
}


const CardsContainer = ({status, items,filterValue}:ICardsContainer) => {
    console.log('CardsContainer')


    return (
        <div className={styles.container}
        >
        <p className={styles.status}>{status}</p>
        <Droppable droppableId={status}>
            {
                (provided)=>(
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                    {filterValue === "все" ?
                    items.map((item: Data, index: any)=> {
                    return (
                    status === item.status
                    && <CardItem
                        data={item}
                        id={item.id}
                        key={item.id}
                        type={item.type}
                        index={index} />
                            );
                            })
                    : items.filter((item:Data)=> item.type === filterValue).map((item: Data, index: any)=> {
                            return (
                                status === item.status
                                && <CardItem
                                    data={item}
                                    id={item.id}
                                    key={item.id}
                                    type={item.type}
                                    index={index} />
                            );
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