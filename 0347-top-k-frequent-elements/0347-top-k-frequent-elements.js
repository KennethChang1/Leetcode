/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for (let num of nums) {
        const count = map.get(num) || 0;
        
        map.set(num, count + 1);
    }
    
    const arr = [];
    for (let [key, value] of map) {
        arr.push([key, value]);
    }
    
    const res = arr.sort((a, b) => b[1] - a[1])
    
    return res.slice(0, k).map((x) => x[0])
};