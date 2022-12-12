import { wrapping } from "./index";

describe("Reto 01: ¡Automatizando envolver regalos de Navidad!", () => {
  const test1 = [];
  const test2 = ["cat", "game", "socks"];
  const test3 = ["midu"];
  const test4 = ["a"];
  test("Test 1: Retorna un arreglo", () => {
    expect(wrapping(test1)).toBeInstanceOf(Array);
  });
  test("Test 2: Envolviendo regalos", () => {
    expect(wrapping(test2)).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
  test("Test 3: Envolviendo regalos", () => {
    expect(wrapping(test3)).toEqual(["******\n*midu*\n******"]);
  });
  test("Test 4: Envolviendo regalos", () => {
    expect(wrapping(test4)).toEqual(["***\n*a*\n***"]);
  });
  test("Test 4: [] => []", () => {
    expect(wrapping(test1)).toEqual([]);
  });
});
