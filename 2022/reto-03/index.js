export function distributeGifts(packOfGifts = [], reindeers = []) {
  const weightPack = packOfGifts.reduce((acc, el) => acc + el.length, 0);
  const weightReindeers = reindeers.reduce((acc, el) => acc + el.length * 2, 0);
  return Math.trunc(weightReindeers / weightPack);
}