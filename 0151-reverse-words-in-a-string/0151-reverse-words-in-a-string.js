/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const trimmed_string = s.trim().replace(/\s+/g, ' ');;
    const arr = trimmed_string.split(" ")
    const reversed = arr.reverse();
    
    return reversed.join(" ")
};