/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let prevChars = s[0];

    for (let i = 1; i < s.length; i++) {
      if (!prevChars.includes(s[i])) {
        prevChars += s[i];
      } else {
        count++;
        prevChars = s[i];
      }
    }

    return count;
//     let curr = "";
//     let count = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         if (curr.indexOf(s[i]) != -1) {
//             curr = "";
//             count = count + 1;
//         }
        
//         curr += s[i];
//     }
    
//     return count + 1
};