import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tasks from ".";
import { addNewTask } from '../../redux/slices/tasksSlice';
import { store } from '../../redux/store';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';


describe('Tasks page', () => {

    const getDeleteBtn  = () => screen.getByLabelText("удалить задачу");
    const getTaskList  = () => screen.getAllByLabelText('открыть задачу');

    beforeEach(() => store.dispatch(addNewTask({id:'123', deadline:'3423', content:'sdkfjsfdl dslfdsfkdjf sfkd', type:'work', createdDate:'213' })));

    it('открывает задачу при клике', async () => {
        
        renderWithRedux(<Tasks/>);

        const taskList = getTaskList();

        await userEvent.click(taskList[0])

        expect(getDeleteBtn()).toBeInTheDocument();
    })

    it('удаляет задачу при клике', async () => {
        renderWithRedux(<Tasks/>);

        const taskList = getTaskList();
        await userEvent.click(taskList[0])

        const btn = getDeleteBtn();

        expect(btn).toBeInTheDocument();
        
        await userEvent.click(btn);

        expect(btn).not.toBeInTheDocument();
        expect(taskList[0]).not.toBeInTheDocument();
    })
})