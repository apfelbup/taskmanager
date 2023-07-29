import styles from "./index.module.scss";
import { useState } from "react";

import Star from './Star';

interface IStarRating {
    totalStars: number,
    id:string,
    rating:number
}

const StarRating = ({totalStars=5, id, rating }:IStarRating) => {
    const [hover, setHover] = useState(rating);

    return (
        <div className={styles.raiting}>
            {[...Array(totalStars)].map((star, index) => {
            const value = index + 1;
    
            return (
                <Star
                setHover={setHover}
                hover={hover}
                key={index}
                id={id}
                value={value}
                rating = {rating}
                />
            );
        })}
        </div>
    );
}


export default StarRating;