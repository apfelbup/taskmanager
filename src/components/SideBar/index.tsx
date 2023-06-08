import { useAppSelector } from "../../hooks/reduxhooks";
import NavLinks from "./NavLinks";
import styles from "./sideBar.module.scss"




const SideBar = () => {
    const pageType = useAppSelector(state => state.timer.pageType);

    if(pageType === "selection"){
        return(
            <div className={styles.container}>
                <NavLinks/>
                <button>
                    Выйти
                </button>
            </div>
        )
    } else{
        return null
    }

}

export default SideBar;


