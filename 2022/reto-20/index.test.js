import { howManyReindeers } from './index';

describe('Reto 20: Más viajes retadores', () => {
  const test1 = howManyReindeers(
    [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 },
    ]
  );
  const test2 = howManyReindeers(
    [
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [{ country: 'Spain', weight: 37 }]
  );
  const test3 = howManyReindeers(
    [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 },
    ]
  );
  const test4 = howManyReindeers(
    [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
    ]
  );

  test('Test 1: Debe retornar un Array', () => {
    expect(test1).toBeInstanceOf(Array);
  });
  test('Test 2: Debe retornar un array con el equipo de renos a enviar.', () => {
    expect(test1).toEqual([
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
    ]);
  });
  test('Test 3: Debe retornar un array con el equipo de renos a enviar.', () => {
    expect(test2).toEqual([
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 2,
          },
          {
            type: 'Gasoline',
            num: 2,
          },
          {
            type: 'Diesel',
            num: 7,
          },
        ],
      },
    ]);
  });
  test('Test 4: Debe retornar un array con el equipo de renos a enviar.', () => {
    expect(test3).toEqual([
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
    ]);
  });
  test('Test 5: Debe retornar un array con el equipo de renos a enviar.', () => {
    expect(test4).toEqual([
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Gasoline',
            num: 5,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
    ]);
  });
});
