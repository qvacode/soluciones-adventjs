import { sortToys } from './index';

describe('Reto 19: Ordenando los regalos.', () => {
  const test1 = sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]);
  const test2 = sortToys(
    ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
    [3, 1, 0, 2, 4]
  );
  const test3 = sortToys(
    ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
    [8, 6, 5, 7, 9]
  );
  const test4 = sortToys(
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
    [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
  );

  test('Test 1: Debe retornar un Array', () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test('Test 2: Debe retornar un Array con los regalos ordenados', () => {
    expect(test1).toEqual(['puzzle', 'car', 'ball', 'doll']);
  });
  test('Test 3: Debe retornar un Array con los regalos ordenados', () => {
    expect(test2).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
  });
  test('Test 4: Debe retornar un Array con los regalos ordenados', () => {
    expect(test3).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
  });
  test('Test 5: Debe retornar un Array con los regalos ordenados', () => {
    expect(test4).toEqual([
      'l',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'j',
      'k',
    ]);
  });
});
