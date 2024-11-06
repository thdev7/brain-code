const { invertElements } = require('../src/invertElements')

describe('6 - Testes para a função invertElements', () => {

    it('deve inverter corretamente um array de qualquer tamanho', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [5, 4, 3, 2, 1];
      const result = invertElements(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um array vazio quando receber um array vazio', () => {
      const input = [];
      const expected = [];
      const result = invertElements(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um novo array e não modificar o array original', () => {
      const input = [1, 2, 3];
      const result = invertElements(input);
      expect(result).not.toBe(input);
    });

    it('deve inverter corretamente um array contendo apenas um elemento', () => {
      const input = [1];
      const expected = [1];
      const result = invertElements(input);
      expect(result).toEqual(expected);
    });

    it('deve inverter corretamente um array contendo apenas dois elementos', () => {
      const input = [1, 2];
      const expected = [2, 1];
      const result = invertElements(input);
      expect(result).toEqual(expected);
    });
});
