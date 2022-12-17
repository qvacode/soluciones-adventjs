export const carryGifts = (gifts, maxWeight) => {
  return gifts
    .filter((el) => el.length <= maxWeight)
    .reduce((acc, el) => {
      return acc.length > 0 &&
        (acc[acc.length - 1].replace(/ /g, "") + el).length <= maxWeight
        ? ((acc[acc.length - 1] += ` ${el}`), acc)
        : [...acc, el];
    }, []);
};
