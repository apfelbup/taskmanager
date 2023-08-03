import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import Comments from ".";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";


const data = [
    {
        content: 'комментарий',
        id: '123',
        date: '25 марта 2023 г.'
    },
    {
        content: 'комментарий',
        id: '12345',
        date: '25 марта 2023 г.'
    },
    {
        content: 'комментарий',
        id: '321',
        date: '25 марта 2023 г.'
    }
]

describe('Comments', () => {
    it('рендерит массив корректно', () => {
        renderWithRedux(<Comments comments={data}/>)

        expect(screen.getAllByText(/комментарий/i).length).toBe(3);
    })
})