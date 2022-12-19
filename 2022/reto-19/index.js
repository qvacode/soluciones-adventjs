export const sortToys = (toys, positions) => {
  const res = [];
  positions.forEach((el, index) => {
    res.push([toys[index], el]);
  });
  res.sort((a, b) => a[1] - b[1]);
  return res.map(el => el[0]);
};

export const sortToysAlt = (toys = [], positions = []) => {
  return toys.sort((a, b) => {
    return positions[toys.indexOf(a)] - positions[toys.indexOf(b)];
  });
};
