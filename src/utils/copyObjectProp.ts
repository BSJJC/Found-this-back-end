/**
 * if objA and objB have the prop, copy the value to objB to objA
 * @param objA 
 * @param objB
 * @returns objA
*/
function copyObjectProp(
  objA: { [x: string]: string | number; },
  objB: { [x: string]: string | number; }
): object {
  for (const key in objA) {
    if (Object.prototype.hasOwnProperty.call(objA, key)) {
      if (objB[key]) {
        objA[key] = objB[key];
      }
    }
  };

  return objA;
};

export default copyObjectProp;