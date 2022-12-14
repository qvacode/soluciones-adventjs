export const getOptimalPath = (path) => {
  return path.reduceRight((acc, el) => {
    return el.map(
      (value, index) => value + Math.min(acc[index], acc[index + 1])
    );
  })[0];
};

const getOptimalPathAlt = (path = []) => {
  let optimalPath = [];
  path.reverse().forEach((el) => {
    optimalPath = el.map(
      (value, index) =>
        value + Math.min(optimalPath[index] || 0, optimalPath[index + 1] || 0)
    );
  });
  return optimalPath[0];
};
