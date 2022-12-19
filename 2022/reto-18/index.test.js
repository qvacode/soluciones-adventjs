import { dryNumber } from './index';

describe('Reto 18: ¡Nos quedamos sin tinta!', () => {
  const test1 = dryNumber(1, 15);
  const test2 = dryNumber(2, 20);
  const test3 = dryNumber(3, 33);
  const test4 = dryNumber(4, 45);
  const test5 = dryNumber(5, 55);
  const test6 = dryNumber(9, 8);

  test('Test 1: Debe retornar un valor del tipo Array', () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test('Test 2: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test1).toEqual([1, 10, 11, 12, 13, 14, 15]);
  });
  test('Test 3: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test2).toEqual([2, 12, 20]);
  });
  test('Test 4: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test3).toEqual([3, 13, 23, 30, 31, 32, 33]);
  });
  test('Test 5: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test4).toEqual([4, 14, 24, 34, 40, 41, 42, 43, 44, 45]);
  });
  test('Test 6: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test5).toEqual([5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55]);
  });
  test('Test 7: Debe retornar un array con los números donde no hay tinta.', () => {
    expect(test6).toEqual([]);
  });
});
