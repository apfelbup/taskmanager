import styles from "./index.module.scss"

import { IRadio } from "../../interfaces";


 

const Radio = ({options, handler}:IRadio) => {

    return (
      <div className={styles.radio}>
        {options.map((item, i) => (<label className={styles.radioLabel} htmlFor={item.id} key={item.id}> {i === 0 ? <input onChange={(e) => handler(e.target.value)} type="radio" name={item.name} id={item.id} value={item.value} defaultChecked/> : <input onChange={(e) => handler(e.target.value)} type="radio" name={item.name} id={item.id} value={item.value}/>} <span>{item.title}</span> </label> ))}
      </div>
    )
}

export default Radio;