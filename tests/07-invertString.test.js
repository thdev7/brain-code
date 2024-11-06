const { invertString } = require('../src/invertString')

describe('7 - Testes para a função invertString', () => {

    it('deve retornar a versão invertida de uma string sem caracteres especiais ou espaços', () => {
      const result = invertString("hello");
      expect(result).toEqual("olleh");
    });

    it('deve retornar a versão invertida de uma string com caracteres especiais e espaços', () => {
      const result = invertString("hello world!");
      expect(result).toEqual("!dlrow olleh");
    });

    it('deve retornar uma string vazia quando receber uma string vazia', () => {
      const result = invertString("");
      expect(result).toEqual("");
    });

    it('deve retornar corretamente com apenas um caractere', () => {
      const result = invertString("a");
      expect(result).toEqual("a");
    });

    it('deve retornar a mesma string quando receber um palíndromo', () => {
      const result = invertString("racecar");
      expect(result).toEqual("racecar");
    });
});
