import { createMemoryHistory } from '@remix-run/router';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { store } from '../../redux/store';
import SideBar from '.';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

const history = createMemoryHistory();
const renderComponent = () => render(
            <Router navigator={history} location={history.location}>
                <Provider store={store}>
                    <SideBar/>
                </Provider>
            </Router>
            )

describe('Sidebar', () => {

    const getTaskLink = () => screen.getByLabelText('Задачи');
    const getStatisticLink = () => screen.getByLabelText('Статистика');
    const getBooksLink = () => screen.getByLabelText('Книги');

    it('при клике открывается главная страница', async () => {
        renderComponent();

        await userEvent.click(getStatisticLink());

        expect(history.location.pathname).toBe('/statistic');

        await userEvent.click(getTaskLink());

        expect(history.location.pathname).toBe('/')
    });
    it('при клике открывается страница /statistic', async () => {
        renderComponent();

        await userEvent.click(getStatisticLink());

        expect(history.location.pathname).toBe('/statistic')
    });
    it('при клике открывается страница /books', async () => {
        renderComponent();

        await userEvent.click(getBooksLink());

        expect(history.location.pathname).toBe('/books')
    })
})