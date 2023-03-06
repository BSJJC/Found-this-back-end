function calcTurePageIndexes(newIndex: number, maxPageIndex: number) {
  const left = [newIndex - 4, newIndex - 3, newIndex - 2, newIndex - 1];
  const right = [newIndex + 1, newIndex + 2, newIndex + 3, newIndex + 4];

  let rightMore = 0;
  let leftMore = 0;

  for (let i = 0; i < 4; i++) {
    if (left[i] <= 0) {
      rightMore++;
    }
    if (right[i] > maxPageIndex) {
      leftMore++;
    }
  }

  for (let i = 0; i < rightMore; i++) {
    left.shift();
    right.push(right[right.length - 1] + 1);
  }
  for (let i = 0; i < leftMore; i++) {
    right.pop();
    left.unshift(left[0] - 1);
  }

  return [...left, newIndex, ...right];
}

export default calcTurePageIndexes;
