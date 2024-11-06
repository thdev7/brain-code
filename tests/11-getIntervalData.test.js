const { getIntervalData } = require('../src/getIntervalData')

describe('11 - Testes para a função getIntervalData', () => {

    it('deve retornar um objeto com um array e um contador quando dado um array e dois números', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 2;
      const fim = 4;

      const result = getIntervalData(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [2, 3, 4],
        contador: 3
      });
    });

    it('deve retornar um objeto com um array e um contador quando fornecido um array e dois números', () => {
        const array = [4, 6, 80, 100];
        const inicio = 6;
        const fim = 100;
    
        const result = getIntervalData(array, inicio, fim);
    
        expect(result).toEqual({
            arrayNoIntervalo: [6, 80, 100],
            contador: 3
        });
    });


    it('deve retornar um objeto com um array e um contador quando dado um array e dois números', () => {
        const array = [20, 18, 9, 15, 6, 80, 100];
        const inicio = 20;
        const fim = 80;
    
        const result = getIntervalData(array, inicio, fim);
    
        expect(result).toEqual({
            arrayNoIntervalo: [20, 80],
            contador: 2
        });
    });

    it('deve retornar um array vazio e um contador de 0 quando fornecido um array vazio e dois números', () => {
      const array = [];
      const inicio = 2;
      const fim = 4;

      const result = getIntervalData(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    it('deve retornar um array vazio e um contador de 0 quando fornecido um array e dois números que não correspondem a nenhum elemento no array', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 6;
      const fim = 8;

      const result = getIntervalData(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    it('deve retornar um array vazio e um contador de 0 quando fornecido um array e dois números na ordem incorreta', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 4;
      const fim = 2;

      const result = getIntervalData(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    it('deve retornar um array vazio e um contador de 0 quando fornecido um array e dois valores NaN', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = NaN;
      const fim = NaN;

      const result = getIntervalData(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });
});
