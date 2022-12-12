export function countTime(leds = []) {
  const turnLeds = leds.join("").split("1");
  turnLeds[0] += turnLeds.pop();

  return turnLeds.reduce((acc, el) => {
    const res = el.length * 7;
    return Math.max(acc, res);
  }, 0);
}
