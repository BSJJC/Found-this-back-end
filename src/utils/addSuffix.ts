function addSuffix(str: number | string, suffix: string): string {
  if (typeof str !== "string") {
    return str.toString() + suffix;
  }

  return str + suffix;
};

export default addSuffix;