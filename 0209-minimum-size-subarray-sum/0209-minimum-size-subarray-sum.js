/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let total = 0;
    let minSubarray = 0;
    
    while (right < nums.length) {
        total += nums[right];
        
        while (total >= target) {
            let curr = (right - left) + 1;
            minSubarray = minSubarray === 0 ? curr : Math.min(curr, minSubarray);
            total -= nums[left]
            left++;
        }
        
        right++;
    }
    
    return minSubarray
};