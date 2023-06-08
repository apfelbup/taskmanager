/* eslint-disable @typescript-eslint/no-unused-vars */
import CardsContainer from './CardsContainer';
import {Status} from '../../interfaces';
import styles from './index.module.scss';
import { Data } from '../../interfaces';
import { useState } from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import { useAppSelector } from '../../hooks/reduxhooks';
import { statuses } from '../../assets/constants';


const DragAndDrop = ({filterValue}) => {
    const {tasks} = useAppSelector(state=> state.tasks);

    return (<div className={styles.grid}>
            {
                statuses.map(container => (
                    <CardsContainer
                    status={container}
                    key={container}
                    items={tasks}
                    filterValue={filterValue}
                    />
                ))
            }
        </div>
    )
}

export default DragAndDrop;