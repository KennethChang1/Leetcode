/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let increment = BigInt(digits.join("")) + BigInt(1);

    return increment.toString().split("")
    
};