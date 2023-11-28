/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aAeEiIoOuU';
    let ans = "";
    let arr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            arr.push(s[i]);
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            ans += arr.pop();
        } else {
            ans += s[i]
        }
    }
    
    return ans
};