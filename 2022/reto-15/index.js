export const decorateTree = (base) => {
  const tree = base.split(" ");

  const ornaments = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    RP: "B",
    PR: "B",
    BR: "P",
    RB: "P",
  };

  const nextRow = (el = []) => {
    return el.slice(1).map((_, i) => ornaments[el[i] + el[i + 1]]);
  };

  return tree
    .slice(1)
    .reduce((acc, _, index) => [...acc, nextRow(acc[index])], [tree])
    .reverse()
    .map((el) => el.join(" "));
};
