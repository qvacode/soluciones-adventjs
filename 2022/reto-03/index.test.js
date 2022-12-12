import { distributeGifts } from "./index";

describe("Reto 03: ¿Cuántas cajas de regalos puede llevar Papá Noel?", () => {
  const test1 = distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]); //2
  const test2 = distributeGifts(["a", "b", "c"], ["d", "e"]); //1
  const test3 = distributeGifts(["videogames", "console"], ["midu"]); //0
  const test4 = distributeGifts(
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  ); //5
  const test5 = distributeGifts(
    ["music"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  ); //26

  test("Test 1: Debe retornar un Número", () => {
    expect(test1).toEqual(expect.any(Number));
  });
  test("Test 2: Debe retornar el número de cajas", () => {
    expect(test1).toEqual(2);
  });
  test("Test 3: Debe retornar el número de cajas", () => {
    expect(test2).toEqual(1);
  });
  test("Test 4: Debe retornar el número de cajas", () => {
    expect(test3).toEqual(0);
  });
  test("Test 5: Debe retornar el número de cajas", () => {
    expect(test4).toEqual(5);
  });
  test("Test 6: Debe retornar el número de cajas", () => {
    expect(test5).toEqual(26);
  });
});
