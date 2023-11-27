/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const length = Math.min(word1.length, word2.length);
    let string = "";
    
    for (let i = 0; i < length; i++) {
        string += word1[i] + word2[i];
    }
    
    
    return string + word1.slice(length) + word2.slice(length)
};