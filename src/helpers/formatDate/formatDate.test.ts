import {formatDate} from './formatDate';

describe('конвертирование даты', () => {
    it('вызов без переменной', () => {
        const {createdDate} = formatDate();

        expect(createdDate).toBeDefined();
    });
    it('вызов с корректной переменной', () => {
        const {createdDate, deadline} = formatDate('2022-10-10');

        expect(createdDate).toBeDefined();
        expect(deadline).toBe('10 октября 2022 г.');
    })
    it('вызов с некорректной переменной', () => {
        const {createdDate, deadline} = formatDate('некорректное значение');

        expect(createdDate).toBeDefined();
        expect(deadline).toBe('Invalid Date');
    })
})