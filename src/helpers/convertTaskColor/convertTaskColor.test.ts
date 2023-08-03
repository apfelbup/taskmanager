import { convertTaskColor } from "./convertTaskColor";


describe('конвертирование типа в цвет', () => {
    it('корректное значение', ()=> {
        const color = convertTaskColor('хобби');
        expect(color).toBe('#6C76CC');
    });
    it('некорректное значение', () => {
        const color = convertTaskColor('некорректное значение');
        expect(color).not.toBeDefined();
    })
})