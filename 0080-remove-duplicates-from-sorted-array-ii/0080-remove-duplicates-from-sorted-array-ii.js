/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let count = 1;
    let curr = null;
    for (let i = 0; i < nums.length; i++) {
        if (curr === nums[i]) {
            count = count + 1;
        } else {
            count = 1;
        }
        curr = nums[i];
        
        if (count > 2) {
            nums.splice(i, 1);
            i--;
        }
    }
    
    return nums.length
};

