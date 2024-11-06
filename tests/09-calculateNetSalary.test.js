const { calculateNetSalary } = require('../src/calculateNetSalary')

describe('7 - Testes para a função calculateNetSalary', () => {

    it('deve retornar o salário líquido correto para um salário bruto de 2000', () => {
      const grossSalary = 2000;
      const expectedNetSalary = "Salário: R$ 1820";

      expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
    });

    it('deve retornar o salário líquido correto para um salário bruto de 3000', () => {
      const grossSalary = 3000;
      const expectedNetSalary = "Salário: R$ 2612.55";

      expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
    });

    it('deve retornar o salário líquido correto para um salário bruto de 4000', () => {
      const grossSalary = 4000;
      const expectedNetSalary = "Salário: R$ 3380.8";

      expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
    });

    it('deve retornar 0 para um salário bruto de 0', () => {
      const grossSalary = 0;
      const expectedNetSalary = "Salário: R$ 0";

      expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
    });

    it('deve retornar o salário líquido correto para o salário bruto mínimo (1045)', () => {
      const grossSalary = 1045;
      const expectedNetSalary = "Salário: R$ 961.4";

      expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
    });
});
