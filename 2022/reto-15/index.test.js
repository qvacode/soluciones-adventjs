import { decorateTree } from "./index";

describe("Reto 15: Decorando el árbol de navidad", () => {
  const test1 = decorateTree("B P R P");
  const test2 = decorateTree("B B");
  const test3 = decorateTree("B B P R P R R");
  const test4 = decorateTree("R R P R R");

  test("Test 1: Debe retornar un valor del tipo Array", () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test("Test 2: Debe rotarnar un array construyendo el árbol de navidad", () => {
    expect(test1).toEqual(["R", "P B", "R B B", "B P R P"]);
  });
  test("Test 3: Debe rotarnar un array construyendo el árbol de navidad", () => {
    expect(test2).toEqual(["B", "B B"]);
  });
  test("Test 4: Debe rotarnar un array construyendo el árbol de navidad", () => {
    expect(test3).toEqual([
      "B",
      "R P",
      "B P P",
      "P R B R",
      "P P B B P",
      "B R B B B R",
      "B B P R P R R",
    ]);
  });
  test("Test 5: Debe rotarnar un array construyendo el árbol de navidad", () => {
    expect(test4).toEqual(["R", "R R", "P B P", "R B B R", "R R P R R"]);
  });
});
