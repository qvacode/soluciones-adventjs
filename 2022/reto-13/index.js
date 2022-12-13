export const getFilesToBackup = (lastBackup, changes) => {
  return changes
    .reduce(
      (acc, el) => (
        el[1] > lastBackup && !acc.includes(el[0]) && acc.push(el[0]), acc
      ),
      []
    )
    .sort((a, b) => a - b);
};
