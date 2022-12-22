import { checkStepNumbers } from './index';

describe('Reto 22: La iluminación en sintonía', () => {
  const test1 = checkStepNumbers(
    ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
    [1, 33, 10, 2, 44, 20]
  ); // true
  const test2 = checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10]); // false
  const test3 = checkStepNumbers(['tree_1', 'tree_1', 'house'], [1, 2, 10]); // true
  const test4 = checkStepNumbers(
    [
      'house',
      'house',
      'tree_1',
      'tree_1',
      'house',
      'tree_2',
      'tree_2',
      'tree_3',
    ],
    [5, 2, 1, 2, 3, 4, 5, 6]
  ); // false

  test('Test 1: Debe retornar un boolean', () => {
    expect(typeof test1).toEqual("boolean");
  });
  test('Test 2: Debe retornar true', () => {
    expect(test1).toEqual(true);
  });
  test('Test 3: Debe retornar true', () => {
    expect(test2).toEqual(false);
  });
  test('Test 4: Debe retornar true', () => {
    expect(test3).toEqual(true);
  });
  test('Test 5: Debe retornar true', () => {
    expect(test4).toEqual(false);
  });

});
