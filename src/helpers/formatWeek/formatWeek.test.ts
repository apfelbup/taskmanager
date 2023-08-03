import { formatWeek } from "./formatWeek";


describe('форматирование дней недели', () => {
    it('вызов с корректным значением', () => {
        const day = formatWeek(1);

        expect(day).toBe('first');
    });
    it('вызов с некорректным значением', () => {
        const day = formatWeek(10);

        expect(day).not.toBeDefined();
    });
})