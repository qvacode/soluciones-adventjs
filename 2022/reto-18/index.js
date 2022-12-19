export const dryNumber = (dry = 0, numbers = 0) => {
  const res = [];
  for (let i = 1; i <= numbers; i++) {
    res.push(i);
  }
  return res.filter(el => el.toString().includes(dry));
};


function dryNumberAlt(dry, numbers) {
    return Array
      .from({ length: numbers }, (_, index) => index + 1)
      .filter(number => {
        return number.toString().includes(dry);
      });
  }