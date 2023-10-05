/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedString = s.trim().split(" ");
    return trimmedString[trimmedString.length - 1].length
};