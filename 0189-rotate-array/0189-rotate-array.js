/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const map = new Map(nums.map((el, index) => [(index + k) % nums.length, el]));
    console.log(map)
    
    for (let [keys, value] of map) {
        nums[keys] = value
    }
};