
import { useAppDispatch } from "../../../hooks/reduxhooks";
import { changeRating } from "../../../redux/slices/booksSlice";
import styles from "./index.module.scss";

interface IStar {
    value:number,
    id:string,
    rating:number,
    setHover: (arg: any) => void,
    hover: number
}

const Star = ({ value, id, rating, setHover, hover }:IStar) => {
    const dispatch = useAppDispatch();

    const ratingHandler = () => {
        dispatch(changeRating({id:id, rating:value}));
    }

    return (
        <div
        className={styles.star}
        onClick={ratingHandler}
        onMouseEnter={() => setHover(value)}
        onMouseLeave={() => setHover(null)}
        >
        <svg
            fill={value <= (hover || rating) ? '#AA68C2' : '#AEAEAE'}
            height='30px'
            viewBox="0 0 25 25"
            width='30px'
        >
        <polygon
            strokeWidth="0"
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
        </svg>
    </div>
    )
}

export default Star;