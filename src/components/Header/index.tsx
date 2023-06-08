import styles from './header.module.scss'
import { useLocation } from "react-router-dom";
import { titles } from '../../assets/constants';
import DateSelection from './DateSelection';

const Header = () => {
    const location = useLocation();
    const title = location.pathname.replace('/','');
    
    return(
        <header className={styles.header}>
        <h1>{titles[title as keyof typeof titles]}</h1>
        {title === 'statistic' ? <DateSelection/> :null}
        {title === 'tasks' ? <p className={styles.today}>Сегодня</p>: null}
        </header>
    )
}

export default Header