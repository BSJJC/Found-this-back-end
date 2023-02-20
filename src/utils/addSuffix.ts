/**
 * add a suffix to a string
 * @param the string that needs suffix
 * @param the suffix
 * @returns string with suffix
*/
function addSuffix(str: number | string, suffix: string): string {
  if (typeof str !== "string") {
    return str.toString() + suffix;
  }

  return str + suffix;
};

export default addSuffix;