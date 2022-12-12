export function checkPart(part) {
  const upperPart = part.toUpperCase();
  const partToArr = upperPart.split("");
  if (upperPart === partToArr.reverse().join("")) return true;

  return partToArr.reduce((acc, el, index) => {
    const rmCharacter = partToArr.filter((value, i) => i !== index);
    return rmCharacter.join("") === rmCharacter.reverse().join("") ? true : acc;
  }, false);
}

function checkPartOpt(part) {
  return [...part].some((x, i, arr) => {
    let w = arr.filter((_, y) => y != i)
    return w.join("") == w.reverse().join("")
  })
}