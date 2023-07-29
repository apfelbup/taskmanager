import styles from './index.module.scss';

import { useAppSelector } from '../../hooks/reduxhooks';
import { BOOKS_STATUSES } from '../../assets/constants';

import CardsContainer from './CardsContainer';


const DragAndDrop = () => {
    const {books} = useAppSelector(state=> state.books);

    return (
        <div className={styles.grid}>
            {
                BOOKS_STATUSES.map(container => (
                    <CardsContainer
                    status={container}
                    key={container}
                    items={books}
                    />
                ))
            }
        </div>
    )
}

export default DragAndDrop;