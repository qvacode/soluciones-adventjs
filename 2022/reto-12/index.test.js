import { selectSleigh } from "./index";

describe("Reto 12: Trineos eléctricos, ¡guau!", () => {
  const test1 = selectSleigh(1, [
      { name: "pheralb", consumption: 0.3 },
      { name: "TMChein", consumption: 0.5 },
    ]),
    test2 = selectSleigh(10, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 5 },
    ]),
    test3 = selectSleigh(10, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 2 },
      { name: "marcospage", consumption: 3 },
    ]),
    test4 = selectSleigh(50, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 2 },
      { name: "marcospage", consumption: 3 },
    ]);

  test("Test 1: Debe retornar un valor del tipo String", () => {
    expect(test1).toEqual(expect.any(String));
  });
  test("Test 2: Debe retornar el nombre del reno.", () => {
    expect(test1).toEqual("TMChein");
  });
  test("Test 3: Debe retornar el nombre del reno.", () => {
    expect(test2).toEqual("Pedrosillano");
  });
  test("Test 4: Debe retornar el nombre del reno.", () => {
    expect(test3).toEqual("SamarJaffal");
  });
  test("Test 5: Debe retornar null.", () => {
    expect(test4).toBeNull();
  });
});
