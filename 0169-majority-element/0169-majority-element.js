/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    let curr = 0;
    let largest = 0;
    
    for (let i of nums) {
        let count = map.get(i) || 0;
        map.set(i, ++count);
    }
    
    for (let [key, value] of map) {
        if (value > curr) {
            console.log(value, curr)
            curr = value;
            largest = key;
        }
    }
    
    return largest
};