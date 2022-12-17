import { fixLetter } from "./index";

describe("Reto 16: Arreglando las cartas de Papá Noel", () => {
  const test1 = fixLetter("Debe retornar un valor del tipo String");
  const test2 = fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  );
  const test3 = fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  );
  const test4 = fixLetter("  hi    santa    claus ");
  const test5 = fixLetter("  hi    santa    claus . santa claus is the best  ");
  const test6 = fixLetter("  hi    santa    claus ??");
  const test7 = fixLetter(
    "Hey santa Claus .  I want a bike.   I want a videogame! "
  );

  test("Test 1: Debe retornar un valor del tipo String", () => {
    expect(test1).toEqual(expect.any(String));
  });
  test("Test 2: Debe retornar un String con la carta arreglada", () => {
    expect(test2).toEqual(
      "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."
    );
  });
  test("Test 3: Debe retornar un String con la carta arreglada", () => {
    expect(test3).toEqual(
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
    );
  });
  test("Test 4: Debe retornar un String con la carta arreglada", () => {
    expect(test4).toEqual("Hi Santa Claus.");
  });
  test("Test 5: Debe retornar un String con la carta arreglada", () => {
    expect(test5).toEqual("Hi Santa Claus. Santa Claus is the best.");
  });
  test("Test 6: Debe retornar un String con la carta arreglada", () => {
    expect(test6).toEqual("Hi Santa Claus?");
  });
  test("Test 7: Debe retornar un String con la carta arreglada", () => {
    expect(test7).toEqual(
      "Hey Santa Claus. I want a bike. I want a videogame!"
    );
  });
});
