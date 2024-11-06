// Importa a função
const { canDrive } = require('../src/canDrive');

describe('1 - Testes para a função canDrive', () => {
  // Antes de cada teste, redefinimos o console.log para podermos verificar as saídas
  let consoleOutput = [];
  const mockedLog = output => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  afterEach(() => {
    console.log = console.log; // Restaura o console.log original após os testes
  });

  test('Deve imprimir "Você pode dirigir." para idade igual ou superior a 18', () => {
    canDrive(18);
    expect(consoleOutput).toContain("Você pode dirigir.");

    canDrive(20);
    expect(consoleOutput).toContain("Você pode dirigir.");
  });

  test('Deve imprimir "Você não pode dirigir." para idade inferior a 18', () => {
    canDrive(16);
    expect(consoleOutput).toContain("Você não pode dirigir.");

    canDrive(17);
    expect(consoleOutput).toContain("Você não pode dirigir.");
  });
});
