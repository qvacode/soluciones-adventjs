export function getGiftsToRefill(a1 = [], a2 = [], a3 = []) {
  const groupArr = [...new Set([...a1, ...a2, ...a3])];
  return groupArr.filter(
    (el) => a1.includes(el) + a2.includes(el) + a3.includes(el) === 1
  );
}