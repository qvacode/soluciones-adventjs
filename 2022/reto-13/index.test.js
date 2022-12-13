import { getFilesToBackup } from "./index";

describe('Retor 13: Backup de los archivos de Papá Noel.', () => {
    const test1 = getFilesToBackup(1546300800, [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ]) //
    const test2 = getFilesToBackup(1546300600, [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ]) // 
    const test3 = getFilesToBackup(1556300600, [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ]) // []
    const test4 = getFilesToBackup(1556300600, []) // []

    test('Test 1: Retorna un valor del tipo Array', () => {
        expect(test4).toBeInstanceOf(Array);
    });
    test('Test 2: Retorna los ids de los archivos que necesitan hacer backup.', () => {
        expect(test1).toEqual([1, 3]);
    });
    test('Test 3: Retorna los ids de los archivos que necesitan hacer backup.', () => {
        expect(test2).toEqual([1, 2, 3]);
    });
    test('Test 4: Retorna los ids de los archivos que necesitan hacer backup.', () => {
        expect(test3).toEqual([]);
    });
    test('Test 5: Retorna los ids de los archivos que necesitan hacer backup.', () => {
        expect(test4).toEqual([]);
    });
});