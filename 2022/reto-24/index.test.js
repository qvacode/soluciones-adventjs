import { canExit } from './index';

describe('Reto 24: El último reto es un laberinto.', () => {
  const test1 = 'boolean';
  const test2 = canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ]);
  const test3 = canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ]);
  const test4 = canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', ' ', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ]);
  const test5 = canExit([['E', ' ', ' ', ' ', 'S']]);
  const test6 = canExit([['E', ' ', 'W', ' ', 'S']]);
  const test7 = canExit([['E', ' ', 'W', ' ', 'S']]);
  const test8 = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
  ]);
  const test9 = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ]);
  const test10 = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', 'W', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ]);
  const test11 = canExit([
    ['E', 'S', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
  ]);

  test('Test 1: Debe retornar un boolean', () => {
    expect(typeof test2).toEqual(test1);
  });
  test('Test 2: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test2).toEqual(true);
  });
  test('Test 3: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test3).toEqual(false);
  });
  test('Test 4: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test4).toEqual(false);
  });
  test('Test 5: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test5).toEqual(true);
  });
  test('Test 6: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test6).toEqual(false);
  });
  test('Test 7: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test7).toEqual(false);
  });
  test('Test 8: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test8).toEqual(true);
  });
  test('Test 9: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test9).toEqual(true);
  });
  test('Test 10: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test10).toEqual(false);
  });
  test('Test 11: Debe retornar si se puede cruzar el laberinto.', () => {
    expect(test11).toEqual(true);
  });
});
