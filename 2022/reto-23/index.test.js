import { executeCommands } from './index';

describe('Reto 23: El compilador de Papá Noel', () => {
  const test1 = executeCommands([
    'MOV 5,V00',
    'MOV 10,V01',
    'DEC V00',
    'ADD V00,V01',
  ]);
  const test2 = executeCommands([
    'MOV 255,V00',
    'INC V00',
    'DEC V01',
    'DEC V01',
  ]);
  const test3 = executeCommands([
    'MOV 10,V00',
    'DEC V00',
    'INC V01',
    'JMP 1',
    'INC V06',
  ]);
  const test4 = executeCommands([
    'MOV 10,V00',
    'MOV V00,V01',
    'MOV V01,V02',
    'MOV V02,V03',
    'MOV V03,V04',
  ]);

  test('Test 1: Debe retornar un Array', () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test('Test 2: Debe retornar un Array con el resultado para cada registro', () => {
    expect(test1).toEqual([14, 10, 0, 0, 0, 0, 0, 0]);
  });
  test('Test 3: Debe retornar un Array con el resultado para cada registro', () => {
    expect(test2).toEqual([0, 254, 0, 0, 0, 0, 0, 0]);
  });
  test('Test 4: Debe retornar un Array con el resultado para cada registro', () => {
    expect(test3).toEqual([0, 10, 0, 0, 0, 0, 1, 0]);
  });
  test('Test 5: Debe retornar un Array con el resultado para cada registro', () => {
    expect(test4).toEqual([10, 10, 10, 10, 10, 0, 0, 0]);
  });
});
