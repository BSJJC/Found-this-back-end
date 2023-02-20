/**
 * add a prefix to a str
 * @param  string that needs prefix
 * @param  prefix
 * @returns string with prefix
*/
function addPrefix(str: string | number, prefix: string): string {
  if (typeof str !== "string") {
    return prefix + str.toString();
  }

  return prefix + str;
};

export default addPrefix;