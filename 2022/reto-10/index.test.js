import { checkJump } from "./index";

describe("Reto 10: El salto del trineo de Papá Noel", () => {
  const test1 = checkJump([1, 3, 8, 5, 2]), // true
    test2 = checkJump([1, 7, 3, 5]), // false
    test3 = checkJump([1, 2, 2, 2, 1]), //true
    test4 = checkJump([1, 2, 3]), //false
    test5 = checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]), //true
    test6 = checkJump([1, 1, 1, 1, 4, 4, 4, 3, 3, 3, 4, 1]), //false
    test7 = checkJump([2, 2, 2, 2]), //false
    test8 = checkJump([1, 3, 2, 5, 4, 3, 2, 1]), // false
    test9 = checkJump([9]); // false

  test("Test 1: Debe retornar un Boolean", () => {
    expect(test1).toEqual(expect.any(Boolean));
  });
  test("Test 2: Debe retornar true", () => {
    expect(test1).toEqual(true);
  });
  test("Test 3: Debe retornar false", () => {
    expect(test2).toEqual(false);
  });
  test("Test 4: Debe retornar true", () => {
    expect(test3).toEqual(true);
  });
  test("Test 5: Debe retornar false", () => {
    expect(test4).toEqual(false);
  });
  test("Test 6: Debe retornar true", () => {
    expect(test5).toEqual(true);
  });
  test("Test 7: Debe retornar false", () => {
    expect(test6).toEqual(false);
  });
  test("Test 8: Debe retornar false", () => {
    expect(test7).toEqual(false);
  });
  test("Test 9: Debe retornar false", () => {
    expect(test8).toEqual(false);
  });
  test("Test 10: Debe retornar false", () => {
    expect(test9).toEqual(false);
  });
});
