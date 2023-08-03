import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithRedux } from '../../../tests/helpers/renderWithRedux';
import FocusPopup from ".";
import userEvent from '@testing-library/user-event';


const mockType = jest.fn();
const mockPopup = jest.fn();


describe('FocusPopup', () => {

    const getInput = () => screen.getByPlaceholderText('60');
    const getButton = () => screen.getByRole('button', {name: 'Запустить'});
    
    it('handlerPopup отрабатывает', async () => {
        renderWithRedux(<FocusPopup setType={mockType} setPopup={mockPopup}/>);

        const button = getButton();

        await userEvent.click(button);

        expect(mockPopup).toBeCalled();
        expect(mockPopup).toBeCalledTimes(1);
    });

    it('инпут работает', async () => {
        renderWithRedux(<FocusPopup setType={mockType} setPopup={mockPopup}/>);

        const input = getInput();

        await userEvent.clear(input);
        await userEvent.type(input, '60');

        expect(input).toHaveValue(60);
    });

    it('инпут работает с верхним пределом', async () => {
        renderWithRedux(<FocusPopup setType={mockType} setPopup={mockPopup}/>);

        const input = getInput();
        const button = getButton();

        await userEvent.clear(input);
        await userEvent.type(input, '180');

        await userEvent.click(button);

        expect(screen.queryByText("Выберите корректное время")).toBeNull();
        expect(mockPopup).toBeCalledTimes(1);
    });

    it('инпут работает с нижним пределом', async () => {
        renderWithRedux(<FocusPopup setType={mockType} setPopup={mockPopup}/>);

        const input = getInput();
        const button = getButton();

        await userEvent.clear(input);
        await userEvent.type(input, '1');

        await userEvent.click(button);

        expect(screen.queryByText("Выберите корректное время")).toBeNull();
        expect(mockPopup).toBeCalledTimes(1);
    });

    it('отображается ошибка при некорректном инпуте', async () => {
        renderWithRedux(<FocusPopup setType={mockType} setPopup={mockPopup}/>);

        const input = getInput();
        const button = getButton();

        await userEvent.type(input, '1000');
        await userEvent.click(button);

        expect(mockPopup).not.toBeCalled();
        expect(screen.getByText('Выберите корректное время')).toBeInTheDocument();
    });
})