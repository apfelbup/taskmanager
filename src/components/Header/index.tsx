import styles from './header.module.scss'

import { useLocation } from "react-router-dom";

import { TITLES } from '../../assets/constants';

const Header = () => {
    const location = useLocation();
    const title = location.pathname.replace('/','');
    
    return(
        <header className={styles.header}>
        <h1>{TITLES[title as keyof typeof TITLES]}</h1>
        </header>
    )
}

export default Header