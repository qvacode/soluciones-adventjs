import { fitsInOneBox } from "./index";

describe("Reto 04: Una caja dentro de una caja y otra ...", () => {
  const test1 = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
    test2 = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]),
    test3 = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]),
    test4 = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]),
    test5 = fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ]);

  test("Test 1: Debe retornar un Boolean", () => {
    expect(test1).toEqual(expect.any(Boolean));
  });
  test("Test 2: Debe retornar true", () => {
    expect(test1).toEqual(true);
  });
  test("Test 3: Debe retornar true", () => {
    expect(test2).toEqual(true);
  });
  test("Test 4: Debe retornar false", () => {
    expect(test3).toEqual(false);
  });
  test("Test 5: Debe retornar false", () => {
    expect(test4).toEqual(false);
  });
  test("Test 6: Debe retornar false", () => {
    expect(test5).toEqual(false);
  });
});
