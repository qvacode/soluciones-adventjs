import { printTable } from './index';

describe('Reto 21: Creando las tablas de regalos.', () => {
  const test1 = printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 },
  ]);
  const test2 = printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 },
  ]);
  const test3 = printTable([{ name: 'Game', quantity: 10000 }]);
  const test4 = printTable([{ name: 'Game', quantity: 1234567890 }]);
  const test5 = printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 },
  ]);

  test('Test 1: Debe retornar un valor del tipo string', () => {
    expect(typeof test1).toEqual("string");
  });
  test('Test 2: Debe retornar un string que representa la tabla de regalos', () => {
    expect(test1).toEqual("++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************");
  });
  test('Test 3: Debe retornar un string que representa la tabla de regalos', () => {
    expect(test2).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************");
  });
  test('Test 4: Debe retornar un string que representa la tabla de regalos', () => {
    expect(test3).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************");
  });
  test('Test 5: Debe retornar un string que representa la tabla de regalos', () => {
    expect(test4).toEqual("+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************");
  });
  test('Test 6: Debe retornar un string que representa la tabla de regalos', () => {
    expect(test5).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************");
  });
});
