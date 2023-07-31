/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    
    while (left < right) {
        let currHeight = Math.min(height[left], height[right]);
        let width = right - left;
        const currArea = currHeight * width;
        
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
        
        res = Math.max(res, currArea);
    }
    
    return res
};