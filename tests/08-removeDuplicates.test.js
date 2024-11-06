const { removeDuplicates } = require('../src/removeDuplicates')

describe('8 - Testes para a função removeDuplicates', () => {

    it('deve retornar um array vazio quando o array de entrada estiver vazio', () => {
      const input = [];
      const expected = [];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar o mesmo array quando não houver duplicados no array de entrada', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um array com apenas os elementos únicos do array de entrada, preservando sua ordem', () => {
      const input = [1, 2, 3, 2, 4, 5, 1];
      const expected = [1, 2, 3, 4, 5];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um array com apenas um elemento quando o array de entrada tiver apenas um elemento', () => {
      const input = [1];
      const expected = [1];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um array com apenas um elemento quando o array de entrada tiver apenas elementos duplicados', () => {
      const input = [1, 1, 1, 1];
      const expected = [1];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });

    it('deve retornar um array com apenas um elemento quando todos os elementos do array de entrada forem iguais', () => {
      const input = [2, 2, 2, 2, 2];
      const expected = [2];
      const result = removeDuplicates(input);
      expect(result).toEqual(expected);
    });
});
