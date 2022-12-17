import { carryGifts } from "./index";

describe("Reto 17: Llevando los regalos en sacos", () => {
  const test1 = carryGifts(["game", "bike", "book", "toy"], 10);
  const test2 = carryGifts(["game", "bike", "book", "toy"], 7);
  const test3 = carryGifts(["game", "bike", "book", "toy"], 4);
  const test4 = carryGifts(["toy", "gamme", "toy", "bike"], 6);
  const test5 = carryGifts(["toy", "toy", "toy", "toy"], 2);
  const test6 = carryGifts(["toy", "toy", "disk", "disk", "toy", "toy"], 7);

  test("Test 1: Debe retornar un Array", () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test("Test 2: Debe retornar un Array con los regalos", () => {
    expect(test1).toEqual(["game bike", "book toy"]);
  });
  test("Test 3: Debe retornar un Array con los regalos", () => {
    expect(test2).toEqual(["game", "bike", "book toy"]);
  });
  test("Test 4: Debe retornar un Array con los regalos", () => {
    expect(test3).toEqual(["game", "bike", "book", "toy"]);
  });
  test("Test 5: Debe retornar un Array con los regalos", () => {
    expect(test4).toEqual(["toy", "gamme", "toy", "bike"]);
  });
  test("Test 6: Debe retornar un Array con los regalos", () => {
    expect(test5).toEqual([]);
  });
  test("Test 7: Debe retornar un Array con los regalos", () => {
    expect(test6).toEqual(["toy toy", "disk", "disk toy", "toy"]);
  });
});
