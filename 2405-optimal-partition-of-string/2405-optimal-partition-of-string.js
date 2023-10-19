/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let prevChars = s[0];

    for (let i = 1; i < s.length; i++) {
      if (prevChars.indexOf(s[i]) == -1) {
        prevChars += s[i];
      } else {
        count++;
        prevChars = s[i];
      }
    }

    return count;
};