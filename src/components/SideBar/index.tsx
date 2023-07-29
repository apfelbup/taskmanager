import styles from "./sideBar.module.scss"

import Focusing from "../../pages/Focusing";
import Profile from "../Profile";
import NavLinks from "./NavLinks";






const SideBar = () => {

        return(

                <div className={styles.sidebar}>
                <Profile/>
                <Focusing/>
                <NavLinks/>
                </div>
        )
}

export default SideBar;


