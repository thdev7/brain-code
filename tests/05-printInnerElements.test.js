const { printInnerElements } = require('../src/printInnerElements')

describe('5 - Testes para a função printInnerElements', () => {

    it('deve imprimir um por um de todos os elementos, exceto o primeiro e o último, quando o comprimento do array for maior ou igual a 3', () => {
      const array = [1, 2, 3, 4, 5];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(3);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      expect(consoleSpy).toHaveBeenCalledWith(4);
  
      consoleSpy.mockRestore();
    });

    it('deve imprimir o único elemento no meio quando o comprimento do array for igual a 3', () => {
      const array = [1, 2, 3];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(2);
  
      consoleSpy.mockRestore();
    });

    it('deve imprimir um por um de todos os elementos, exceto o primeiro e o último, quando o comprimento do array for maior que 3', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(4);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      expect(consoleSpy).toHaveBeenCalledWith(4);
      expect(consoleSpy).toHaveBeenCalledWith(5);
  
      consoleSpy.mockRestore();
    });

    it(`deve imprimir 'Tamanho do array inválido' quando array estiver vazio`, () => {
      const array = [];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });

    it(`deve imprimir 'Tamanho do array inválido' quando o comprimento do array for igual a 1`, () => {
      const array = [1];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });

    it(`deve imprimir 'Tamanho do array inválido' quando o comprimento do array for igual a 2`, () => {
      const array = [1, 2];
      const consoleSpy = jest.spyOn(console, 'log');
  
      printInnerElements(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });
});
