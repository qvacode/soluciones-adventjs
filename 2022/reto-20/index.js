export const howManyReindeers = (reindeerTypes, gifts) => {
  return gifts.map(gift => {
    let currentMax = gift.weight;

    let weights = Object.values(reindeerTypes)
      .map(x => [x.type, x.weightCapacity])
      .filter(x => x[1] < currentMax)
      .sort((x, y) => y[1] - x[1]);

    let currentCapacity = weights.reduce((acc, curr) => (acc += curr[1]), 0);

    let reindeerQuantity = weights.map(([type, weight]) => {
      let quantity = (currentMax / currentCapacity) >> 0;
      currentCapacity -= weight;
      currentMax -= quantity * weight;
      return { type, num: quantity };
    });

    return { country: gift.country, reindeers: reindeerQuantity };
  });
};


export const howManyReindeersAlt = (reindeerTypes = [], gifts = []) => {
  reindeerTypes = reindeerTypes.sort(
    (x, y) => y.weightCapacity - x.weightCapacity
  );
  return gifts.map(({ country, weight }) => {
    //The weight we need to carry per country
    let currentMax = weight;

    //Get all the usable reindeers
    let weights = reindeerTypes.filter((x) => x.weightCapacity < currentMax);

    //Get the max they can carry together (one of each of them)
    let currentCapacity = weights.reduce(
      (acc, curr) => (acc += curr.weightCapacity),
      0
    );
    //Get the number of reindeers by type
    let reindeers = weights.map(({ type, weightCapacity }) => {
      //Get the num of the current type in descending order
      let num = (currentMax / currentCapacity) >> 0; //The integer of this division tells us how much of the current type we need

      //We substract this type weightCapacity from the total capacity we calculated
      currentCapacity -= weightCapacity;

      //And substract how much this team of reindeers can carry
      //of the currentMax weight we need to carry
      currentMax -= num * weightCapacity;

      return { type, num };
    });

    return { country, reindeers };
  });
}