/**
 * get a random array by length
 * @param array length
 * @param max value in the random array
 * @returns a random array
*/
function getRandomArray(length: number, maxValue: number): number[] {
  return Array.from(
    { length: length },
    () => Math.floor(Math.random() * maxValue)
  );
};

export default getRandomArray;