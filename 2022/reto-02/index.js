export function countHours(year = 0, holidays = []) {
  return holidays.reduce((acc, el) => {
    const date = new Date(`${el}/${year}`).getDay();
    return date !== 0 && date !== 6 ? acc + 2 : acc;
  }, 0);
}
