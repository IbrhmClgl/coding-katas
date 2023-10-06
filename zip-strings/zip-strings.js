// Implement a zipStrings function in zip-strings.js with the following requirements in mind.

// The zipStrings function receives two string parameters
// The zipStrings function should return one string where the characters of both parameters are merged using the zip procedure (Reißverschlussverfahren)
// Merge the strings as shown in the Zip Strings Example code

function zipStrings(strA, strB) {
  let result = "";
  const maxLength = Math.max(strA.length, strB.length);

  for (let i = 0; i < maxLength; i++) {
    result += (strA[i] || "") + (strB[i] || "");
  }
  return result;
}

console.log(zipStrings("a", "b"));
