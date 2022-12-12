import { getGiftsToRefill } from "./index";

describe("Reto 07: Haciendo inventario de regalos.", () => {
  const test1 = getGiftsToRefill(
    ["bici", "coche", "bici", "bici"],
    ["coche", "bici", "muñeca", "coche"],
    ["bici", "pc", "pc"]
  );
  const test2 = getGiftsToRefill([], [], []);
  const test3 = getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"]);
  const test4 = getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"]);
  const test5 = getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"]);

  test("Test 1: Debe retornar un Array", () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test("Test 2: Debe retornar un arreglo de regalos", () => {
    expect(test1).toEqual(["muñeca", "pc"]);
  });
  test("Test 3: Debe retornar un arreglo de regalos", () => {
    expect(test2).toEqual([]);
  });
  test("Test 4: Debe retornar un arreglo de regalos", () => {
    expect(test3).toEqual([]);
  });
  test("Test 5: Debe retornar un arreglo de regalos", () => {
    expect(test4).toEqual(["a", "b", "c"]);
  });
  test("Test 6: Debe retornar un arreglo de regalos", () => {
    expect(test5).toEqual(["a", "b", "c", "d", "e", "f"]);
  });
});
