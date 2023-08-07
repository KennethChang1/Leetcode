/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right)/2);
        const res = nums[mid]
        
        if (nums[left] < nums[right]) {
            return nums[left]
        } 
        
        if (nums[left] <= res) {
            left = mid + 1;
        } else if (res < nums[left]) {
            right = mid;
        }
    }
    return nums[left]
};