import { links } from "../../assets/constants";
import { NavLink } from "react-router-dom";
import styles from "./sideBar.module.scss";


const NavLinks = () => (
        <div className={styles.navigate}>
        {links.map((item)=>(
            <nav key={item.name}>
            <NavLink
            to={item.to}
            style={({ isActive }) => {return {color: isActive ? "#AA68C2" : ""}}}
            >
            {item.name}
            </NavLink>
            </nav>
        ))}

        </div>
    );

export default NavLinks