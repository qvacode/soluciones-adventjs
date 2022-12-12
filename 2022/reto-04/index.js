export function fitsInOneBox(boxes = []) {
  const orderBoxes = boxes.sort((a, b) => a["l"] - b["l"]);

  return orderBoxes.every(
    ({ l: currectBoxL, w: currentBoxW, h: currentBoxH }, index, boxesList) => {
      const {
        l: previousBoxL,
        w: previousBoxW,
        h: previousBoxH,
      } = boxesList[index - 1] || {};

      const isFirstBox = index === 0;
      const contentPreviuosOne =
        currectBoxL > previousBoxL &&
        currentBoxW > previousBoxW &&
        currentBoxH > previousBoxH;

      return isFirstBox || contentPreviuosOne;
    }
  );
}
