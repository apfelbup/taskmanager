import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import Popup from ".";



describe('Popup', () => {
    it('рендерит FocusPopup', () => {
        renderWithRedux(<Popup type="focusing"/>);

        expect(screen.getByText(/Таймер/i)).toBeInTheDocument();
    });
    it('рендерит BooksPopup', () => {
            renderWithRedux(<Popup type="books"/>);
    
            expect(screen.getByText(/Автор/i)).toBeInTheDocument();
    });
    it('рендерит TaskPopup', () => {
        renderWithRedux(<Popup type="newTask"/>);

        expect(screen.getByText(/Тип Задачи:/i)).toBeInTheDocument();
    });
})