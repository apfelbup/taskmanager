import styles from './index.module.scss';

import FocusPopup from './FocusPopup';
import TaskPopup from './TaskPopup';
import BooksPopup from './BooksPopup';





const Popup = ({...props}:any) => {
    const {type} = props;

    return (
        <div className={styles.container}>
            <div className={styles.popup}> 
                {type === 'focusing' && <FocusPopup setType={props.setType} setPopup={props.handler}/>}
                {type === 'newTask' && <TaskPopup handler={props.handler}/>}
                {type === 'books' && <BooksPopup handler={props.handler}/>}
            </div>
        </div>
    )
}

export default Popup;