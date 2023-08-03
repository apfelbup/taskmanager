import '@testing-library/jest-dom';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Steps from '.';
import { addNewTask, toggleTaskActivity } from '../../redux/slices/tasksSlice';
import { store } from '../../redux/store';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';


describe('Steps', () => {

    const getInput = () => screen.getByPlaceholderText('Добавить шаг');
    const getButton = () =>  screen.getByLabelText('создать шаг');
    const getDeleteStep = () => screen.queryByLabelText('удалить шаг');


    beforeEach(() => { store.dispatch(addNewTask({id:'123', deadline:'3423', content:'content', type:'work', createdDate:'213' }));
                        store.dispatch(toggleTaskActivity('123'))});

    
    afterEach(cleanup);

    it('не создает шаг при отсутствии данных', async () => {
        renderWithRedux(<Steps activeTaskId="123"/>);

        await userEvent.click(getButton());

        expect(getDeleteStep()).not.toBeInTheDocument();
    });
    
    it('создает шаг при клике', async () => {
        renderWithRedux(<Steps activeTaskId="123"/>);

        await userEvent.type(getInput(), 'test app');
        await userEvent.click(getButton());

        expect(getInput()).toHaveValue('');
        expect(screen.getByLabelText('test app')).toBeInTheDocument();
    });
})