import { getCompleted } from "./index";

describe("Reto 11: Papá Noel es un Scrum Master", () => {
  const test1 = getCompleted("01:00:00", "03:00:00"); // '1/3'
  const test2 = getCompleted("02:00:00", "04:00:00"); // '1/2'
  const test3 = getCompleted("01:00:00", "01:00:00"); // '1/1'
  const test4 = getCompleted("00:10:00", "01:00:00"); // '1/6'
  const test5 = getCompleted("01:10:10", "03:30:30"); // '1/3'
  const test6 = getCompleted("03:30:30", "05:50:50"); // '3/5

  test("Test 1: Debe retornar un valor del tipo String", () => {
    expect(test1).toEqual(expect.any(String));
  });
  test('Test 2: Debe retornar "1/3', () => {
    expect(test1).toEqual("1/3");
  });
  test('Test 3: Debe retornar "1/2', () => {
    expect(test2).toEqual("1/2");
  });
  test('Test 4: Debe retornar "1/1', () => {
    expect(test3).toEqual("1/1");
  });
  test('Test 5: Debe retornar "1/6', () => {
    expect(test4).toEqual("1/6");
  });
  test('Test 6: Debe retornar "1/3', () => {
    expect(test5).toEqual("1/3");
  });
  test('Test 7: Debe retornar "3/5', () => {
    expect(test6).toEqual("3/5");
  });
});
