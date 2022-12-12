import { getMaxGifts } from "./index";

describe("Reto 05: Optimizando viajes de santa", () => {
  const test1 = getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
  const test2 = getMaxGifts([50], 15, 1); // 0
  const test3 = getMaxGifts([50], 100, 1); // 50
  const test4 = getMaxGifts([50, 70], 100, 1); // 70
  const test5 = getMaxGifts([50, 70, 30], 100, 2); // 100
  const test6 = getMaxGifts([50, 70, 30], 100, 3); // 100
  const test7 = getMaxGifts([50, 70, 30], 100, 4); // 100
  const test8 = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4); //100
  const test9 = getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000); //115

  test("Test 1: Debe devolver un Número", () => {
    expect(test1).toEqual(expect.any(Number));
  });
  test("Test 2: Debe devolver el número máximo de regalos", () => {
    expect(test1).toEqual(20);
  });
  test("Test 3: Debe devolver el número máximo de regalos", () => {
    expect(test2).toEqual(0);
  });
  test("Test 4: Debe devolver el número máximo de regalos", () => {
    expect(test3).toEqual(50);
  });
  test("Test 5: Debe devolver el número máximo de regalos", () => {
    expect(test4).toEqual(70);
  });
  test("Test 6: Debe devolver el número máximo de regalos", () => {
    expect(test5).toEqual(100);
  });
  test("Test 7: Debe devolver el número máximo de regalos", () => {
    expect(test6).toEqual(100);
  });
  test("Test 8: Debe devolver el número máximo de regalos", () => {
    expect(test7).toEqual(100);
  });
  test("Test 9: Debe devolver el número máximo de regalos", () => {
    expect(test8).toEqual(100);
  });
  test("Test 10: Debe devolver el número máximo de regalos", () => {
    expect(test9).toEqual(115);
  });
});
