import { getOptimalPath } from "./index";

describe("Reto 14: El mejor camino", () => {
  const test1 = getOptimalPath([[0], [7, 4], [2, 4, 6]]); // 8
  const test2 = getOptimalPath([[0], [2, 3]]); // 2
  const test3 = getOptimalPath([[0], [3, 4], [9, 8, 1]]); // 5
  const test4 = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]); // 8
  const test5 = getOptimalPath([
    [1],
    [1, 5],
    [7, 5, 8],
    [9, 4, 1, 3],
    [-1, -1, -1, -1, -1],
  ]); // 7

  test("Test 1: Debe retornar un valor del tipo Number", () => {
    expect(test1).toEqual(expect.any(Number));
  });
  test('Test 2: Debe retornar el valor del camino más corto', () => {
    expect(test1).toEqual(8);
  });
  test('Test 3: Debe retornar el valor del camino más corto', () => {
    expect(test2).toEqual(2);
  });
  test('Test 4: Debe retornar el valor del camino más corto', () => {
    expect(test3).toEqual(5);
  });
  test('Test 5: Debe retornar el valor del camino más corto', () => {
    expect(test4).toEqual(8);
  });
  test('Test 6: Debe retornar el valor del camino más corto', () => {
    expect(test5).toEqual(7);
  });
});
