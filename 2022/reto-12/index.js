export const selectSleigh = (distance, sleighs) => {
  const res = sleighs.filter((el) => el["consumption"] * distance <= 20);
  if (res.length === 0) return null;
  return res[res.length - 1]["name"];
};
