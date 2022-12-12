export const getCompleted = (part = "", total = "") => {
  const partToArr = part.split(":");
  const totalToArr = total.split(":");
  const partToSecond =
    Math.floor(partToArr[0]) * 60 * 60 +
    Math.floor(partToArr[1]) * 60 +
    Math.floor(partToArr[2]);
  const totalToSecond =
    Math.floor(totalToArr[0]) * 60 * 60 +
    Math.floor(totalToArr[1]) * 60 +
    Math.floor(totalToArr[2]);

  const getCommonDivisor = (a, b) => {
    return b ? getCommonDivisor(b, a % b) : a;
  };

  const commonDivisor = getCommonDivisor(partToSecond, totalToSecond);

  const numerator = partToSecond / commonDivisor;
  const denominator = totalToSecond / commonDivisor;

  return numerator + "/" + denominator;
};
