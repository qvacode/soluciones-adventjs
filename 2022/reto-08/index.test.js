import { checkPart } from "./index";

describe("Reto 08: Necesitamos un mecánico", () => {
  const test1 = checkPart("uwu"), // true
    test2 = checkPart("miidim"), // true
    test3 = checkPart("midu"), // false
    test4 = checkPart("rdadar"), // true
    test5 = checkPart("zzzoonzzz"); // true

    test('Test 1: Debe retornar un Boolean', () => {
        expect(test1).toEqual(expect.any(Boolean));
    });
    test('Test 2: Debe retornar true', () => {
        expect(test1).toEqual(true);
    });
    test('Test 3: Debe retornar true', () => {
        expect(test2).toEqual(true);
    });
    test('Test 4: Debe retornar false', () => {
        expect(test3).toEqual(false);
    });
    test('Test 5: Debe retornar true', () => {
        expect(test4).toEqual(true);
    });
    test('Test 6: Debe retornar true', () => {
        expect(test5).toEqual(true);
    });
});
