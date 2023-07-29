import styles from "./sideBar.module.scss";
import { useWindowResize } from "../../hooks/useWindowResize";

import { NavLink } from "react-router-dom";

import { LINKS } from "../../assets/constants";





const NavLinks = () => {
    const size = useWindowResize();

    return(
        <div className={styles.navigate}>
        {LINKS.map((item)=>(
            <nav key={item.name}>
            <NavLink
            to={item.to}
            style={({ isActive }) => {return {color: isActive ? "#AA68C2" : ""}}}
            >
            {size > 1024 ? item.name : <item.icon/>}
            </NavLink>
            </nav>
        ))}

        </div>
        )
    };

export default NavLinks