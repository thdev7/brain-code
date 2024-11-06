const { checkLicenseEligibility } = require('../src/checkLicenseEligibility');

describe('2 - Testes para a função checkLicenseEligibility', () => {
  test('Deve retornar "Não pode obter a licença." para idades abaixo de 18 anos', () => {
    expect(checkLicenseEligibility(17, 0)).toBe("Não pode obter a licença.");
    expect(checkLicenseEligibility(16, 1)).toBe("Não pode obter a licença.");
  });

  test('Deve retornar "Pode obter a licença, mas é necessária supervisão." para idades a partir de 18 anos com menos de 2 anos de experiência', () => {
    expect(checkLicenseEligibility(18, 1)).toBe("Pode obter a licença, mas é necessária supervisão.");
    expect(checkLicenseEligibility(19, 0)).toBe("Pode obter a licença, mas é necessária supervisão.");
  });

  test('Deve retornar "Pode obter a licença sem supervisão." para idades a partir de 18 anos com 2 anos de experiência ou mais', () => {
    expect(checkLicenseEligibility(20, 2)).toBe("Pode obter a licença sem supervisão.");
    expect(checkLicenseEligibility(30, 5)).toBe("Pode obter a licença sem supervisão.");
  });
});