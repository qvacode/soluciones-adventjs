export const checkStepNumbers = (systemNames = [], stepNumbers = []) => {
  const resArr = systemNames.reduce((acc, el, index) => {
    return acc[el]
      ? { ...acc, [el]: [...acc[el], stepNumbers[index]] }
      : { ...acc, [el]: [stepNumbers[index]] };
  }, {});

  return systemNames.every(el => {
    const lightsArr = resArr[el];
    return lightsArr.slice(1).every((val, i) => val > lightsArr[i]);
  });
};

export const checkStepNumbersAlt = (systemNames, stepNumbers) => {
  let hashMap = new Map();

  return systemNames.every(
    (name, i, flag, value) => (
      (value = hashMap.get(name)),
      (flag = !!(!value && hashMap.set(name, [stepNumbers[i]]))),
      !flag &&
        ((flag = value.at(-1) < stepNumbers[i]), flag) &&
        value.push(stepNumbers[i]),
      flag
    )
  );
};
