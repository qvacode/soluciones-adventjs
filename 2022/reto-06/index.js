export function createCube(size) {
  let cont = 1,
    sizeInit = size,
    topPart = "",
    downPart = "";
  while (sizeInit > 0) {
    topPart +=
      " ".repeat(sizeInit - 1) + "/\\".repeat(cont) + "_\\".repeat(size) + "\n";
    if (sizeInit === 1) {
      downPart += " ".repeat(cont - 1) + "\\/".repeat(sizeInit) + "_/".repeat(size);
    } else {
      downPart +=
        " ".repeat(cont - 1) + "\\/".repeat(sizeInit) + "_/".repeat(size) + "\n";
    }
    sizeInit--;
    cont++;
  }
  return topPart + downPart;
}
