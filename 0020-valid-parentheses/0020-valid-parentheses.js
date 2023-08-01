/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (item of s) {
        if (validParentheses[item] !== undefined) {
            stack.push(validParentheses[item]);
            continue;
        }
        
        if (item === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        
        return false
    }
    
    return stack.length === 0
};

const validParentheses = {
    "{" : "}",
    "(" : ")",
    "[" : "]"
}