/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let mid;
    
    if (target < nums[l]) {
        return 0;
    } else if (target > nums[r]) {
        return r + 1;
    }
    
    while (l <= r) {
        mid = Math.floor((l + r)/2)
        if (nums[mid] < target) {
           l = mid + 1;
        } else if (nums[mid] > target) {
           r = mid - 1;
        } else {
            return mid
        }
    }
    
    return l

};