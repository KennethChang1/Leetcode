/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //goalIndex 2 
    //
    let goalIndex = nums.length - 1;
    for (let i = nums.length - 1; i > 0; i--) {
        let prev = i - 1;

        if (prev + nums[prev] >= goalIndex) {
            goalIndex = prev
        } 
    }
    
    return goalIndex === 0 ? true : false
};