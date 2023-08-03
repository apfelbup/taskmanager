import { screen } from "@testing-library/react";
import StarRating from ".";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe('StarRating', () => {

    const getStars = () => screen.getAllByRole('button');

    it('рендерит массив totalStars по умолчанию', () => {
        renderWithRedux(<StarRating id={'123'} rating={4}/>)

        const stars = getStars();

        expect(stars.length).toBe(5);
    });
    it('рендерит массив totalStars с большим количеством', () => {
        renderWithRedux(<StarRating totalStars={10} id={'123'} rating={4}/>)

        const stars = getStars();

        expect(stars.length).toBe(10);
    });
    it('рендерит массив totalStars с меньшим количеством', () => {
        renderWithRedux(<StarRating totalStars={1} id={'123'} rating={4}/>)

        const stars = getStars();

        expect(stars.length).toBe(1);
    })
})