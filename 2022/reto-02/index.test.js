import { countHours } from "./index";

describe("Reto 02: Nadie quiere hacer horas extras", () => {
  const test1 = countHours(2023, ["01/06", "04/01", "12/25"]); //4
  const test2 = countHours(2022, ["01/06", "04/01", "12/25"]); //4
  const test3 = countHours(1985, [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ]); //10
  const test4 = countHours(2000, ["01/01"]); //0

  test("Test 1: Retorna un número", () => {
    expect(test4).toEqual(expect.any(Number));
  });
  test("Test 2: Retorna las horas extras", () => {
    expect(test1).toEqual(4);
  });
  test("Test 3: Retorna las horas extras", () => {
    expect(test2).toEqual(4);
  });
  test("Test 4: Retorna las horas extras", () => {
    expect(test3).toEqual(10);
  });
  test("Test 5: Retorna las horas extras", () => {
    expect(test4).toEqual(0);
  });
});
