import '@testing-library/jest-dom';
import { screen } from "@testing-library/react"
import { renderWithRedux } from "../../tests/helpers/renderWithRedux"
import Radio from "."
import userEvent from '@testing-library/user-event';


const data = [
    {
        title:'title',
        value:'value',
        id:'123',
        name:'name'
    },
    {
        title:'title1',
        value:'value1',
        id:'1234',
        name:'name'
    },
];

const mockfn = jest.fn();


describe('Radio', () => {

    const getFirstLabel = () => screen.getByLabelText("title");
    const getSecondLabel = () => screen.getByLabelText("title1");


    it('рендерит options', () => {
        renderWithRedux(<Radio options={data} handler={mockfn}/>); 

        expect(getFirstLabel()).toBeInTheDocument();
        expect(getSecondLabel()).toBeInTheDocument();
    });
    it('отрабатывает при нажатии', async () => {
        renderWithRedux(<Radio options={data} handler={mockfn}/>);

        await userEvent.click(getSecondLabel());
        expect(getSecondLabel()).toBeChecked();
        
        await userEvent.click(getFirstLabel());
        expect(getFirstLabel()).toBeChecked();
    });
})