export function wrapping(gifts = []) {
  return gifts.reduce((acc, el) => {
    const characters = "*".repeat(el.length + 2);
    return [...acc, `${characters}\n*${el}*\n${characters}`];
  }, []);
}