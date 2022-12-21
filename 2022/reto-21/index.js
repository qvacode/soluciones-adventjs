export const printTable = (gifts = []) => {
  const nameLength = Math.max(
    ...gifts.map(el => el.name.length),
    'Gift'.length
  );
  const quantityLength = Math.max(
    ...gifts.map(el => (el.quantity + '').length),
    'Quantity'.length
  );
  const base = nameLength + quantityLength + 7;

  let strRes = `${'+'.repeat(base)}\n| Gift${' '.repeat(
    nameLength - 4
  )} | Quantity${' '.repeat(quantityLength - 8)} |\n| ${'-'.repeat(
    nameLength
  )} | ${'-'.repeat(quantityLength)} |\n`;

  gifts.forEach(el => {
    strRes += `| ${el.name}${' '.repeat(nameLength - el['name'].length)} | ${
      el.quantity
    }${' '.repeat(quantityLength - el['quantity'].toString().length)} |\n`;
  });

  strRes += `${'*'.repeat(base)}`;

  return strRes;
};
