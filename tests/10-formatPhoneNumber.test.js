const { formatPhoneNumber } = require('../src/formatPhoneNumber')

describe('10 - Testes para a função formatPhoneNumber', () => {

    it('deve retornar uma mensagem de erro quando um array de comprimento incorreto for fornecido', () => {
      const telNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result = formatPhoneNumber(telNumber);
      expect(result).toBe('Array com tamanho incorreto.');
    });

    it('deve retornar uma mensagem de erro quando um array vazio for fornecido', () => {
      const telNumber = [];
      const result = formatPhoneNumber(telNumber);
      expect(result).toBe('Array com tamanho incorreto.');
    });

    it('deve retornar uma mensagem de erro quando um array com menos de 11 dígitos for fornecido', () => {
      const telNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result = formatPhoneNumber(telNumber);
      expect(result).toBe('Array com tamanho incorreto.');
    });

    it('deve retornar uma mensagem de erro quando um array com mais de 11 dígitos for fornecido', () => {
      const telNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
      const result = formatPhoneNumber(telNumber);
      expect(result).toBe('Array com tamanho incorreto.');
    });

    it('Retorne uma string "Array com tamanho incorreto." se o array tiver um tamanho diferente de 11.', () => {
        expect(formatPhoneNumber([0, 1, 6])).toBe('Array com tamanho incorreto.');
        expect(formatPhoneNumber([])).toBe('Array com tamanho incorreto.');
        expect(formatPhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10])).toBe('Array com tamanho incorreto.');
    });
    
    it('Retorne uma string "não é possível gerar um número de telefone com esses valores" se qualquer um dos números no array for menor que 0.', () => {
        expect(formatPhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne uma string "não é possível gerar um número de telefone com esses valores" se qualquer número no array for maior que 9.', () => {
        expect(formatPhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([0, 2, 3, 14, 5, 7, 71, 1, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne uma string "não é possível gerar um número de telefone com esses valores" se qualquer número no array for repetido 3 vezes ou mais.', () => {
        expect(formatPhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(formatPhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne um número de telefone, respeitando parênteses, traços e espaços, se os números na matriz atenderem às restrições.', () => {
        expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe('(12) 34567-8901');
        expect(formatPhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0])).toBe('(52) 81537-2890');
        expect(formatPhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1])).toBe('(02) 43556-8921');
        expect(formatPhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7])).toBe('(02) 34587-9107');
    });
});
