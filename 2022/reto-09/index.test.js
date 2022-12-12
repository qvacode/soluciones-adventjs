import { countTime } from "./index";

describe("Reto 09: Las locas luces de Navidad.", () => {
  const test1 = countTime([0, 1, 1, 0, 1, 0, 0, 0]), // 28
    test2 = countTime([0, 0, 0, 1]), // 21
    test3 = countTime([0, 0, 1, 0, 0]), // 28
    test4 = countTime([0, 1, 1, 0, 1]), // 7
    test5 = countTime([1]), // 0
    test6 = countTime([1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0]); // 21

  test("Test 1: Debe retornar un Number.", () => {
    expect(test1).toEqual(expect.any(Number));
  });
  test("Test 2: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test1).toEqual(28);
  });
  test("Test 3: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test2).toEqual(21);
  });
  test("Test 4: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test3).toEqual(28);
  });
  test("Test 5: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test4).toEqual(7);
  });
  test("Test 6: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test5).toEqual(0);
  });
  test("Test 7: Debe retornar el tiempo en seg que demora en encender todas las luces.", () => {
    expect(test6).toEqual(21);
  });
});
